import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'

import { Layout } from 'components/Layout'
import { FAQ } from 'components/FAQ'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <FAQ />
      </Layout>
    </AuthProvider>
  )
}

export default Home