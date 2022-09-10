import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'

import { Layout } from 'components/Layout'
import { PrivacyPolicy } from 'components/PrivacyPolicy'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <PrivacyPolicy />
      </Layout>
    </AuthProvider>
  )
}

export default Home