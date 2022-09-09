import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { AuthProvider } from 'hook/AuthContext'

import { GetStart } from 'components/GetStart'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>My Site</title>
    </Head>

    <AuthProvider>
      <Layout>
        <GetStart />
      </Layout>
    </AuthProvider>
    </>
  )
}

export default Home