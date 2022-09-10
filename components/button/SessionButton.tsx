import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

import { FirebaseConfig } from 'lib/Firebase'

import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'
import { GoogleLoginButton } from './GoogleLoginButton'

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider

type sessionButtonKeyType = 'login' | 'logout' | 'googleLogin'

export const SessionButton = ({sessionButtonKey}: 
  {sessionButtonKey: sessionButtonKeyType}): ReactElement => {

  const router = useRouter()

  const handleOnLogin = () => {
    router.push('/dashboard')
    signInWithRedirect(auth, provider).then(() => {
    }).catch(e => { console.error(e)} )
  }

  const handleOnLogout = () => {
    auth.signOut().then(() => {
      router.push('/')
    }).catch(e => { console.error(e)} )
  }

  const sessionButtonMap: {[key in sessionButtonKeyType]: ReactElement} = {
    login: <LoginButton handleOnClick={handleOnLogin} />,
    logout: <LogoutButton handleOnClick={handleOnLogout} />,
    googleLogin: <GoogleLoginButton handleOnClick={handleOnLogin} />
  }

  return(
    sessionButtonMap[sessionButtonKey]
  )
}