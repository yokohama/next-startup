import { ReactElement } from "react"
import { useRouter } from 'next/router'

import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

import { FirebaseConfig } from 'lib/Firebase'

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider

type Props = {
  children: string
}

export const UserLoginButton: React.FC<Props> = ({children}: Props): ReactElement => {
  const router = useRouter()

  const handleOnLogin = () => {
    router.push('/user/dashboard')
    signInWithRedirect(auth, provider).then(() => {
    }).catch(e => { console.error(e)} )
  }
  
  return (
    <a href="#"
      onClick={handleOnLogin}
      className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >ログイン</a>
  )
}

export const UserLogoutButton: React.FC<Props> = ({children}: Props): ReactElement => {
  const router = useRouter()

  const handleOnLogout = () => {
    auth.signOut().then(() => {
      router.push('/')
    }).catch(e => { console.error(e)} )
  }

  return (
    <a href="#"
      onClick={handleOnLogout}
      className="py-1 px-4 mr-2 transition rounded-lg hover:bg-indigo-700 hover:text-white border-solid border-2 border-indigo-700"
    >ログアウト</a>
  )
}