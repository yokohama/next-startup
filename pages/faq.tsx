import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Layout } from 'components/Layout'
import { FAQ } from 'components/FAQ'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <FAQ />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default Home