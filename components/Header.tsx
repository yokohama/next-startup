import Link from 'next/link'

import { useAuth } from 'hook/AuthContext'

import { ShowWithLogin, ShowWithNoLogin } from 'components/Display' 
import { SessionButton } from 'components/button/SessionButton'
import { ActiveLink } from './link/ActiveLink'
import Image from 'next/image'

export const Header = () => {
  const { currentUser } = useAuth()

  return (
    <div className='mb-4'>
      <header className='h-24 sm:h-32 flex items-center z-30 w-full bg-indigo-200'>
        <div className='container mx-auto px-6 flex items-center justify-between'>
          <Link href='/'>
            <div className='uppercase text-gray-800 font-black text-3xl'>
              <Image src='/images/logo.png' width='70' height='70' alt='logo' />
            </div>
          </Link>
          <div className='flex items-center'>
            <nav className='font-sen text-gray-800 uppercase text-lg lg:flex items-center hidden'>
              <ShowWithNoLogin required={currentUser}>
                <SessionButton sessionButtonKey='login' />
              </ShowWithNoLogin>
              <ShowWithLogin required={currentUser}>
                <ActiveLink href='/dashboard'>Dashboard</ActiveLink>
                <SessionButton sessionButtonKey='logout' />
              </ShowWithLogin>
            </nav>
            { /* TODO: ここにススマフォサイズ実装 */}
            <button className='lg:hidden flex flex-col ml-4'>
              <span className='w-6 h-1 bg-gray-800 mb-1'>
              </span>
              <span className='w-6 h-1 bg-gray-800 mb-1'>
              </span>
              <span className='w-6 h-1 bg-gray-800 mb-1'>
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}