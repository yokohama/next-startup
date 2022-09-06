import type { NextPage } from 'next'

import { Layout } from 'components/user/Layout'
import { PageProvider } from 'utils/context/PageContext'
import { AuthProvider } from 'utils/context/user/AuthContext'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <PageProvider>
        <Layout>
          <div>index</div>
        </Layout>
      </PageProvider>
    </AuthProvider>
  )
}

export default Home