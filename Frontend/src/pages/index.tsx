import Head from 'next/head'
import React from 'react'
import SectionMain from '../components/Section/Main'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'
import DashboardPage from './dashboard'
import LayoutAuthenticated from '../layouts/Authenticated'

const StyleSelectPage = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <div>
        <SectionMain>
          <LayoutAuthenticated>
            <DashboardPage />
          </LayoutAuthenticated>
        </SectionMain>
      </div>
    </>
  )
}

export default StyleSelectPage
