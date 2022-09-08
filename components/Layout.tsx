import React, { FC } from 'react'

import { useAuth } from 'hook/AuthContext'
import { useLoading } from 'hook/LoadingContext'

import { ShowWithLogin, ShowWithNoLogin } from 'components/Display'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { GetStart } from 'components/GetStart'
import { Dashboard } from './Dashboard'

type Props = {
  children: React.ReactNode
}
export const Layout: FC<Props> = ({children}: Props) => {
  const { currentUser } = useAuth()
  const { isLoading } = useLoading()

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  )
}