import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'

import { Layout } from 'components/Layout'
import { About } from 'components/About'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <About />
      </Layout>
    </AuthProvider>
  )
}

export default Home