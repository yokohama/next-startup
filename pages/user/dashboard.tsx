import type { NextPage } from 'next'

import { Layout } from 'components/user/Layout'
import { Dashboard } from 'components/user/Dashboard'
import { AuthProvider } from 'utils/context/user/AuthContext'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </AuthProvider>
  )
}

export default Home