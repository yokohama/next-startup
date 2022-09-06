import type { NextPage } from 'next'

import { Layout } from 'components/user/Layout'
import { PageProvider } from 'utils/context/PageContext'
import { AuthProvider } from 'utils/context/user/AuthContext'

const Home: NextPage = () => {
  return (
    <PageProvider>
      <AuthProvider>
        <Layout>
          <div>index</div>
        </Layout>
      </AuthProvider>
    </PageProvider>
  )
}

export default Home