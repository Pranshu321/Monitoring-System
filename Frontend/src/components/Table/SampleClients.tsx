import { mdiTrashCan } from '@mdi/js'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import UserAvatar from '../UserAvatar'

const TableSampleClients = () => {
  const [Allprocess, setAllprocess] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [clientsPaginated, setclientsPaginated] = useState(null);
  const [numPages, setnumpages] = useState(0);
  const [pagesList, setpagesList] = useState([]);
  async function fetchProcess() {
    // const res = await fetch("http://127.0.0.1:8000/mongoprocess", { next: { revalidate: 10 } });
    const res = await fetch("https://script.google.com/macros/s/AKfycbyHF2WvZ6rj3pqTnctYkE3PkpXF8S_S512__KDo-lhp4eE9zE_oiX-YIvMbZjoHESc6Cw/exec", { next: { revalidate: 10 } });
    const process = await res.json();
    setAllprocess(process.data);
    const perPage = 20
    setclientsPaginated(Allprocess.slice(perPage * currentPage, perPage * (currentPage + 1)));
    setnumpages(Math.ceil(Allprocess.length / perPage));
    const temp = [];
    for (let i = 0; i < Math.ceil(Allprocess.length / perPage); i++) {
      temp.push(i)
    }
    setpagesList(temp);
  }

  function changePageCOntent() {
    setclientsPaginated(Allprocess.slice(20 * currentPage, 20 * (currentPage + 1)));
  }

  useEffect(() => {
    fetchProcess();
  }, [Allprocess.length]);

  useEffect(() => {
    changePageCOntent();
  }, [currentPage]);
  // if (Allprocess.length == 0) {
  //   return <p>No data</p>
  // }

  // const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)
  const [globalPid, setGlobalPid] = useState(-1);

  const handleModalAction = () => {
    // setIsModalInfoActive(false)
    setIsModalTrashActive(false)
  }

  const onConfirm = async () => {
    const res = await fetch(`http://127.0.0.1:8000/kill?pid=${globalPid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 200) {
      handleModalAction();
      fetchProcess();
    }
  }

  return (
    <>
      <CardBoxModal
        title="Do you want to Kill Process"
        buttonColor="danger"
        buttonLabel="Confirm"
        pid={globalPid != -1 ? globalPid : -1}
        isActive={isModalTrashActive}
        onConfirm={onConfirm}
        onCancel={handleModalAction}
      >
        <p>
          The Process Id is <b>{globalPid}</b>
        </p>
        {/* <p>This is sample modal</p> */}
      </CardBoxModal>

      <table>
        <thead>
          <tr>
            <th />
            <th>Pid</th>
            <th>Name</th>
            <th>Status</th>
            <th>ParentID</th>
            <th>CPU Time User</th>
            <th>Memory %</th>
            <th>CPU Time System</th>
            <th>Reserved Memory</th>
            <th>Virtual Memory</th>
            <th>Total Threads</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {clientsPaginated?.map((client, index: number) => (
            <tr key={index}>
              <td className="border-b-0 lg:w-6 before:hidden">
                <UserAvatar username={client.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
              </td>
              <td data-label="Name">{client.pid}</td>
              <td data-label="Company" className='font-semibold'>{client.name}</td>
              <td data-label="status" className={`${client.status === "running" ? "text-green-500" : "text-red-500"} font-semibold`}>{client.status}</td>
              <td data-label="City">{client.ppid}</td>
              <td data-label="City">{parseFloat(client.cpu_times_user).toFixed(2)}</td>
              <td data-label="City">{client.memory_percent}</td>
              <td data-label="City">{client.cpu_times_system.toFixed(2)}</td>
              <td data-label="City">{client.memory_info_rss}</td>
              <td data-label="City">{client.memory_info_vms}</td>
              <td data-label="City">{client.num_threads}</td>
              {/* <td data-label="Progress" className="lg:w-32">
                <progress
                  className="flex w-2/5 self-center lg:w-full"
                  max="100"
                  value={client.progress}
                >
                  {client.progress}
                </progress>
              </td> */}
              {/* <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">{client.created}</small>
              </td> */}
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <Buttons type="justify-start lg:justify-end" noWrap>
                  {/* <Button
                    color="info"
                    icon={mdiEye}
                    onClick={() => setIsModalInfoActive(true)}
                    small
                  /> */}
                  <Button
                    color="danger"
                    icon={mdiTrashCan}
                    onClick={() => { setGlobalPid(client.pid); setIsModalTrashActive(true); }}
                    small
                  />
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <Buttons>
            {pagesList?.map((page) => (
              <Button
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </Buttons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default TableSampleClients
