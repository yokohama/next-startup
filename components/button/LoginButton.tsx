import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

import { FirebaseConfig } from 'lib/Firebase'

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export const UserLoginButton: React.FC = (): ReactElement => {
  const router = useRouter()

  const handleOnLogin = () => {
    router.push('/dashboard')
    signInWithRedirect(auth, provider).then(() => {
    }).catch(e => { console.error(e)} )
  }

  return (
    <a href='#'
      onClick={handleOnLogin}
      className='py-2 px-4 bg-indigo-600 hover:bg-indigo-700 \
        focus:ring-indigo-500 focus:ring-offset-indigo-200 \
        text-white transition ease-in duration-200 \
        text-center text-base font-semibold \
        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
    >ログイン</a>
  )
}

export const UserGoogleLoginButton: React.FC = (): ReactElement => {
  const router = useRouter()

  const handleOnLogin = () => {
    router.push('/dashboard')
    signInWithRedirect(auth, provider).then(() => {
    }).catch(e => { console.error(e)} )
  }

  return (
    <button type='button' 
      onClick={handleOnLogin}
      className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 \
        focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 \
        font-medium rounded-lg text-sm px-5 py-2.5 text-center \
        inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'>
      <svg className='mr-2 -ml-1 w-4 h-4' 
        aria-hidden='true' 
        focusable='false' 
        data-prefix='fab' 
        data-icon='google' 
        role='img' 
        xmlns='http://www.w3.org/2000/svg' 
        viewBox='0 0 488 512'
      >
        <path fill='currentColor'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
      </svg>
      Sign in with Google
    </button>
  )
}

export const UserLogoutButton: React.FC = (): ReactElement => {
  const router = useRouter()

  const handleOnLogout = () => {
    auth.signOut().then(() => {
      router.push('/')
    }).catch(e => { console.error(e)} )
  }

  return (
    <a href='#'
      onClick={handleOnLogout}
      className='py-1 px-4 mr-2 transition rounded-lg hover:bg-indigo-700 \
        hover:text-white border-solid border-2 border-indigo-700'
    >ログアウト</a>
  )
}