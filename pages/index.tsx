import type { NextPage } from 'next'
import { Layout } from 'components/user/Layout'
import { PageProvider } from 'components/PageContext'

const Home: NextPage = () => {
  return (
    <PageProvider>
      <Layout />
    </PageProvider>
  )
}

export default Home