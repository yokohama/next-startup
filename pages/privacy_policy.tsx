import type { NextPage } from 'next'

import { AuthProvider } from 'hook/AuthContext'
import { LoadingProvider } from 'hook/LoadingContext'

import { Layout } from 'components/Layout'
import { PrivacyPolicy } from 'components/PrivacyPolicy'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Layout>
          <PrivacyPolicy />
        </Layout>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default Home