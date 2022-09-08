import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Layout } from 'components/Layout'
import { About } from 'components/About'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <About />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default Home