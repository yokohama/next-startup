import React, { FC } from 'react'

import { useAuth } from 'hook/UserAuthContext'
import { useLoading } from 'hook/LoadingContext'

import { ShowWithLogin, ShowWithNoLogin } from 'components/Display'
import { Footer } from 'components/Footer'
import { Header } from 'components/user/Header'
import { Index } from 'components/user/Index'
import { GetStart } from 'components/user/GetStart'

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({children}: Props) => {
  const { currentUser } = useAuth()
  const { isLoading } = useLoading()

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      {`isLoading = ${isLoading}`}
      <Header />
      <ShowWithLogin required={currentUser}>
        { children }
      </ShowWithLogin>
      <ShowWithNoLogin required={currentUser}>
        <GetStart />
      </ShowWithNoLogin>
      <Footer />
    </main>
  )
}