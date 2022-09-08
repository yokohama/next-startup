import type { NextPage } from 'next'

import { LoadingProvider, useLoading } from 'hook/LoadingContext'

import { Layout } from 'components/Layout'
import { Index } from 'components/user/Index'

const Home: NextPage = () => {
  return (
    <LoadingProvider>
      <Layout>
        <Index />
      </Layout>
    </LoadingProvider>
  )
}

export default Home



/*
import type { NextPage } from 'next'

import { Layout } from 'components/user/Layout'
import { Dashboard } from 'components/user/Dashboard'
import { AuthProvider } from 'hook/UserAuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Index } from 'components/user/Index'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <Index />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default Home
*/