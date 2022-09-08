import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { GetStart } from 'components/GetStart'
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
          <GetStart />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
    </>
  )
}

export default Home