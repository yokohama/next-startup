import { Dispatch, SetStateAction } from "react"

import { MenuKeyType, MenuMap } from 'components/user/dashboard/Menu'

type Props = {
  menuKey: MenuKeyType
  isActive: boolean
  handleOnClick: Dispatch<SetStateAction<MenuKeyType>>
}

export const MenuItem: React.FC<Props> = ({menuKey, handleOnClick, isActive}: Props) => {
  const label = MenuMap[menuKey].label
  const icon = MenuMap[menuKey].icon
  
  const menuClassName = isActive ?
    'w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 \
      justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 \
      border-r-4 border-blue-500'
    :
    'w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 \
      justify-start hover:text-blue-500'
    
  return(
    // アクティブ <a class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" href="#">
    <a href='#'
      onClick={() => handleOnClick(menuKey)}
      className={menuClassName} >
      <span className="text-left">
        <svg width="20" 
          height="20" 
          fill="currentColor" 
          className="m-auto" 
          viewBox="0 0 2048 1792" 
          xmlns="http://www.w3.org/2000/svg" >
          <path d={icon} />
        </svg>
      </span>
      <span className="mx-4 text-sm font-normal">
        {label}
      </span>
    </a>
  )
}