import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'

import { Layout } from 'components/Layout'
import { DashboardLayout } from 'components/DashboardLayout'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <DashboardLayout />
      </Layout>
    </AuthProvider>
  )
}

export default Home