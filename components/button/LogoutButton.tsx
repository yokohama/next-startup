import { ReactElement } from 'react'

export const LogoutButton = ({handleOnClick}: 
  {handleOnClick: ()=>void}): ReactElement => {

  return (
    <a href='#'
      onClick={handleOnClick}
      className='py-1 px-4 mr-2 transition rounded-lg hover:bg-indigo-700 \
        hover:text-white border-solid border-2 border-indigo-700'
    >ログアウト</a>
  )
}