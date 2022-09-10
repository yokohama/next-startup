import { ReactElement } from 'react'
import Link from 'next/link'

export const SignUpButton = (): ReactElement => {
  return (
    <Link href='/signup'>
      <button type='button'
        className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 \
        focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 \
        font-medium rounded-lg text-sm px-5 py-2.5 text-center \
        inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'>
        メールアドレス
      </button>
    </Link>
  )
}