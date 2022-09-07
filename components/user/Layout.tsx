import React, { FC } from 'react'

import { useAuth } from 'utils/context/user/AuthContext'

import { ShowWithLogin } from 'components/Display'
import { Footer } from 'components/Footer'
import { Header } from 'components/user/Header'

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({children}: Props) => {
  const { currentUser } = useAuth()

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <Header />
      <ShowWithLogin required={currentUser}>
        { children }
      </ShowWithLogin>
      <Footer />
    </main>
  )
}