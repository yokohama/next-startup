import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { About } from 'components/user/About'
import { AuthProvider } from 'utils/context/user/AuthContext'

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export default Home