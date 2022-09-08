import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Index } from 'components/Index'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>My Site</title>
    </Head>

    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <Index />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
    </>
  )
}

export default Home