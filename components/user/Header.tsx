import { useRouter } from 'next/router'
import Link from 'next/link'

import { useAuth } from 'utils/context/user/AuthContext'

import { ShowWithLogin, ShowWithNoLogin } from 'components/Display' 
import { UserLoginButton, UserLogoutButton } from 'components/button/UserLoginButton'
import { ActiveLink } from 'components/link/ActiveLink'

export const Header = () => {
  const { currentUser } = useAuth()
  const path = useRouter().pathname

  return (
    <div className="mb-4">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full bg-indigo-200">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href='/user/dashboard'>
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              <img src='/images/logo.png' width='70' aria-hidden='true' />
            </div>
          </Link>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <ShowWithLogin required={currentUser}>
                <ActiveLink path='/user/dashboard'>Dashboard</ActiveLink>
                <ActiveLink path='/user/profile'>Profile</ActiveLink>
              </ShowWithLogin>
              <ShowWithNoLogin required={currentUser}>
                <UserLoginButton>ログイン</UserLoginButton>
              </ShowWithNoLogin>
              <ShowWithLogin required={currentUser}>
                <UserLogoutButton>ログアウト</UserLogoutButton>
              </ShowWithLogin>
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