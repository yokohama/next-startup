import type { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { SignUp } from 'components/SignUp'

const Home: NextPage = () => {
  return (
    <Layout>
      <SignUp />
    </Layout>
  )
}

export default Home