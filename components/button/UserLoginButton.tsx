import { ReactElement } from "react"
import { useRouter } from 'next/router'

import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

import { FirebaseConfig } from 'lib/Firebase'

type Props = {
  children: string
  path: string
}

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export const UserLoginButton: React.FC<Props> = ({children, path}: Props): ReactElement => {
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