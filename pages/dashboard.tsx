import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Layout } from 'components/Layout'
import { Dashboard } from 'components/Dashboard'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default Home