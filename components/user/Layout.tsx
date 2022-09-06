import { Footer } from 'components/Footer'
import { usePage } from 'utils/context/PageContext'
import { PageComponents } from 'components/Layout'

import { Header } from 'components/user/Header'
import { SignIn } from 'components/user/SignIn'
import { Dashboard } from 'components/user/Dashboard'
import { Profile } from 'components/user/Profile'
import React, { FC } from 'react'

const UserPageComponents: { [key: string]: JSX.Element } = {
  ...PageComponents,
  signIn: <SignIn />,
  dashboard: <Dashboard />,
  profile: <Profile />
}

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({children}: Props) => {
  const { page } = usePage()
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <Header />
      <div>{ UserPageComponents[page] }</div>
      <Footer />
    </main>
  )
}