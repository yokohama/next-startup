import { ReactElement } from 'react'

export const LoginButton = ({handleOnClick}: 
  {handleOnClick: ()=>void}): ReactElement => {

  return (
    <a href='#'
      onClick={handleOnClick}
      className='py-2 px-4 bg-indigo-600 hover:bg-indigo-700 \
        focus:ring-indigo-500 focus:ring-offset-indigo-200 \
        text-white transition ease-in duration-200 \
        text-center text-base font-semibold \
        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
    >ログイン</a>
  )
}