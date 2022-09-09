import { Dispatch, ReactElement, SetStateAction } from "react"

import { MenuKeyType } from 'components/dashboard/Menu'

type Props = {
  menuKey: MenuKeyType
  setMenuKey: Dispatch<SetStateAction<MenuKeyType>>
  component: ReactElement
  setComponent: Dispatch<SetStateAction<ReactElement>>
  isActive: boolean
  handleOnClick: Dispatch<SetStateAction<MenuKeyType>>
  label: string
  icon: string
}

export const MenuItem = ({menuKey, setMenuKey, component, setComponent, isActive, label, icon}: Props): ReactElement => {
  const className = isActive ?
    'w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 \
      justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 \
      border-r-4 border-blue-500'
    :
    'w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 \
      justify-start hover:text-blue-500'
  
  const handleOnClick = () => {
    setMenuKey(menuKey)
    setComponent(component)
  }
    
  return(
    // アクティブ <a class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" href="#">
    <a href='#'
      onClick={() => handleOnClick()}
      className={className} >
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