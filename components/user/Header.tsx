import { usePage } from 'utils/context/PageContext' 
import { useAuth } from 'utils/context/user/AuthContext'
import { ShowWithLogin, ShowWithNoLogin } from 'components/Display' 

export const Header = () => {
  const { page, setPage } = usePage() 
  const { currentUser, login, logout } = useAuth() 
  
  return (
    <div className="mb-4">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full bg-indigo-200">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href='/'>
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              <img src='/images/logo.png' width='70' aria-hidden='true' />
            </div>
          </a>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <ShowWithLogin required={currentUser}>
                <a href="#"
                  className={'py-2 px-4 flex ' + (page === 'dashboard' ? 'text-indigo-500 border-indigo-500 border-b-2' : '')}
                  onClick={() => { setPage('dashboard') }}
                >Dashboard</a>
                <a href="#"
                  onClick={() => { setPage('profile') }}
                  className={'py-2 px-4 flex ' + (page === 'profile' ? 'text-indigo-500 border-indigo-500 border-b-2' : '')}
                >Profile</a>
              </ShowWithLogin>
              <a href="#"
                onClick={() => { setPage('about') }}
                className={'mr-2 py-2 px-4 flex ' + (page === 'about' ? 'text-indigo-500 border-indigo-500 border-b-2' : '')}
              >About</a>
              <ShowWithNoLogin required={currentUser}>
                <a href="#"
                  onClick={login}
                  className="py-1 px-4 mr-2 transition rounded-lg hover:bg-indigo-700 hover:text-white border-solid border-2 border-indigo-700"
                >ログイン</a>
                <a href="#"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={() => { setPage('signIn') }}
                >新規登録</a>
              </ShowWithNoLogin>
              <ShowWithLogin required={currentUser}>
                <a href="#"
                  className="py-1 px-4 mr-2 transition rounded-lg hover:bg-indigo-700 hover:text-white border-solid border-2 border-indigo-700"
                  onClick={logout}
                >ログアウト</a>
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