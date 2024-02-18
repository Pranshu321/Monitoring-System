import {
  mdiChartPie,
  mdiMonitorCellphone,
  mdiGraph,
  mdiMemory,
  mdiCpu64Bit,
  mdiReload,
} from '@mdi/js'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import CardBox from '../components/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'
import { memoryUsage } from 'process'

const DashboardPage = () => {
  const [proccess, setProcess] = useState([]);
  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()
    setChartData(sampleChartData())
  }
  const [memoryusage, setMemoryusage] = useState(0);
  const [TotalThreads, setThreads] = useState(0);
  const [TotalProcess, setTotalProcess] = useState(0);
  async function FetchStats() {
    const res = await fetch("http://127.0.0.1:8000/mongoprocess");
    const process = await res.json();
    setTotalProcess(process.length);
    // max memory find
    let ans = 0;
    for (let index = 0; index < process.length; index++) {
      ans = Math.max(ans, process[index].memory_percent);
    }
    setMemoryusage(ans);
    setThreads(process.reduce((acc, item) => acc + item.num_threads, 0));
  }

  useEffect(() => {
    FetchStats();
  }, [TotalProcess]);

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="12%"
            // trendType="up"
            trendColor="success"
            icon={mdiCpu64Bit}
            iconColor="success"
            number={TotalProcess}
            label="Total Processes"
          />
          <CardBoxWidget
            trendLabel="16%"
            // trendType="down"
            trendColor="danger"
            icon={mdiMemory}
            iconColor="info"
            number={memoryusage}
            numberSuffix="%"
            label="Max Memory Usage"
          />
          <CardBoxWidget
            trendLabel="Overflow"
            // trendType="warning"
            trendColor="warning"
            icon={mdiGraph}
            iconColor="danger"
            number={TotalThreads}
            label="Total Threads"
          />
        </div>

        {/* <div className="my-6">
          <SectionBannerStarOnGitHub />
        </div> */}

        <SectionTitleLineWithButton icon={mdiChartPie} title="CPU usage overview">
          <Button icon={mdiReload} color="whiteDark" onClick={fillChartData} />
        </SectionTitleLineWithButton>

        <CardBox className="mb-6">{chartData && <ChartLineSample data={chartData} />}</CardBox>

        <SectionTitleLineWithButton icon={mdiCpu64Bit} title="CPU Processes" />

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
