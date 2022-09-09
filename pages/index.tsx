import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { AuthProvider } from 'hook/AuthContext'

import { Index } from 'components/Index'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>My Site</title>
    </Head>

    <AuthProvider>
      <Layout>
        <Index />
      </Layout>
    </AuthProvider>
    </>
  )
}

export default Home