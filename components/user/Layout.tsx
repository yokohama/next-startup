import { Header } from './Header'
import { Footer } from '../Footer'
import { usePage } from '../PageContext'
import { AuthProvider } from 'components/user/AuthContext'

import { Index } from 'components/user/Index'
import { SignIn } from 'components/user/SignIn'
import { About } from 'components/About'
import { Dashboard } from 'components/user/Dashboard'
import { Profile } from 'components/user/Profile'

const PageComponents: { [key: string]: JSX.Element } = {
  about: <About />,
  signIn: <SignIn />,
  index: <Index />,
  dashboard: <Dashboard />,
  profile: <Profile />
}

export const Layout = () => {
  const { page } = usePage()
  return (
    <AuthProvider>
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <Header />
        <div>{ PageComponents[page] }</div>
        <Footer />
      </main>
    </AuthProvider>
  )
}