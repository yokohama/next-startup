import type { NextPage } from 'next'

import { Layout } from 'components/user/Layout'
import { Profile } from 'components/user/Profile'
import { AuthProvider } from 'utils/context/user/AuthContext'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layout>
        <Profile />
      </Layout>
    </AuthProvider>
  )
}

export default Home