import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Layout } from 'components/Layout'
import { DashboardLayout } from 'components/DashboardLayout'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <DashboardLayout />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default Home