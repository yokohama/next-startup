import type { NextPage } from 'next'

import { Layout } from 'components/user/Layout'
import { Dashboard } from 'components/user/Dashboard'
import { AuthProvider } from 'hook/UserAuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

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