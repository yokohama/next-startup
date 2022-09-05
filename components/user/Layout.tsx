import { Header } from './Header'
import { Footer } from '../Footer'
import { usePage } from '../PageContext'
import { AuthProvider } from 'components/user/AuthContext'

import { Index } from 'components/user/Index'
import { SignIn } from 'components/user/SignIn'
import { About } from 'components/user/About'
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
      <Header />
      <div>
        {PageComponents[page]}
      </div>
      <Footer />
    </AuthProvider>
  )
}