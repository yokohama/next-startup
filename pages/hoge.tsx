import type { NextPage } from 'next'
import { useAuth, AuthProvider } from 'hook/AuthContext'
import { useEffect } from 'react'

const Hoge = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    console.log('hoge')
    return () => {
      console.log('finish')
    }
  }, [currentUser])
  
  return(
    <div>currentUser = { currentUser?.email }</div>
  )
}

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Hoge />
    </AuthProvider>
  )
}

export default Home