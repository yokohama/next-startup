import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

import { FirebaseConfig } from 'lib/Firebase'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from './button/UserLoginButton'

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export const Header = () => {
  const router = useRouter()
  
  const handleOnLogin = () => {
    router.push('/user/dashboard')
    signInWithRedirect(auth, provider).then(() => {
    }).catch(e => { console.error(e)} )
  }

  return (
    <div className="mb-4">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full bg-indigo-200">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href='/'>
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              <img src='/images/logo.png' width='70' aria-hidden='true' />
            </div>
          </Link>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <ActiveLink path='/about'>
                About
              </ActiveLink>
              <a href="#"
                onClick={handleOnLogin}
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >ログイン</a>
            </nav>
            { /* TODO: ここにススマフォサイズ実装 */}
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}