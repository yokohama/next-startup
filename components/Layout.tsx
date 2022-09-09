import React, { ReactElement } from 'react'

import { LoadingProvider } from 'hook/LoadingContext'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main className='bg-white relative overflow-hidden h-screen'>
      <LoadingProvider>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </LoadingProvider>
    </main>
  )
}