import { Menu, MenuKeyType, MenuMap } from 'components/user/dashboard/Menu'
import { useState } from 'react'

export const Dashboard = () => {
  const [menuKey, setMenuKey] = useState<MenuKeyType>('dashboard')

  return (
    <main className="bg-gray-100 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <Menu menu={menuKey} handleOnClick={setMenuKey} />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          { MenuMap[menuKey].component }
        </div>
      </div>
    </main>
  )
}