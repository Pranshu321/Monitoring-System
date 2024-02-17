import {
  mdiChartPie,
  mdiMonitorCellphone,
  mdiGraph,
  mdiMemory,
  mdiCpu64Bit, 
  mdiReload,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/CardBox/Transaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/CardBox/Client'
import SectionBannerStarOnGitHub from '../components/Section/Banner/StarOnGitHub'
import CardBox from '../components/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'

const DashboardPage = () => {
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()

  const clientsListed = clients.slice(0, 4)

  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()

    setChartData(sampleChartData())
  }

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
            number={254}
            label="Total Processes"
          />
          <CardBoxWidget
            trendLabel="16%"
            // trendType="down"
            trendColor="danger"
            icon={mdiMemory}
            iconColor="info"
            number={7770}
            numberPrefix="$"
            label="Total Memory Usage"
          />
          <CardBoxWidget
            trendLabel="Overflow"
            // trendType="warning"
            trendColor="warning"
            icon={mdiGraph}
            iconColor="danger"
            number={256}
            numberSuffix="%"
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
