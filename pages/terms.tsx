import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'

import { Layout } from 'components/Layout'
import { Terms } from 'components/Terms'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <Terms />
      </Layout>
    </AuthProvider>
  )
}

export default Home