import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { Index } from 'components/user/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Index />
    </Layout>
  )
}

export default Home