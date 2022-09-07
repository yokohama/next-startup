import React, { FC } from 'react'

import { Footer } from 'components/Footer'
import { Header } from 'components/user/Header'

type Props = {
  children: React.ReactNode
}
export const Layout: FC<Props> = ({children}: Props) => {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <Header />
      { children }
      <Footer />
    </main>
  )
}