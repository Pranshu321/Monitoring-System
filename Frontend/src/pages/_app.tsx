import React from 'react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { store } from '../stores/store'
import { Provider } from 'react-redux'
import '../css/main.css'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  const title = `Telavegre Monitering System`

  const description = 'One place to detech all anamoly in cpu processes and monitor them'

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Head>
            <meta name="description" content={description} />
            <title>{title}</title>

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta property="og:image:type" content="image/png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />

            <link rel="icon" href="/admin-one-react-tailwind/favicon.png" />
          </Head>

          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

export default MyApp
