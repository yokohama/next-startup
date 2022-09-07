import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { About } from 'components/About'

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export default Home