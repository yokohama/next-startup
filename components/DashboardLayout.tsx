import { Menu, MenuKeyType } from 'components/dashboard/Menu'
import { Dispatch, ReactElement, SetStateAction, useState } from 'react'

import { Dashboard } from './dashboard/Dashboard'

export type DashboardProps = {
  alertList: ReactElement[]
  setAlertList: Dispatch<SetStateAction<JSX.Element[]>>
}

export const DashboardLayout = (): ReactElement => {
  const [menuKey, setMenuKey] = useState<MenuKeyType>('dashboard')
  const [alertList, setAlertList] = useState<ReactElement[]>([])
  const [component, setComponent] = useState(<Dashboard alertList={alertList} setAlertList={setAlertList} />)
  
  return (
    <main className="bg-gray-100 rounded-2xl h-screen overflow-hidden relative">
      {alertList}
      <div className="flex items-start justify-between">
        <Menu menuKey={menuKey} setMenuKey={setMenuKey} setComponent={setComponent} alertList={alertList} setAlertList={setAlertList} />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          {component}
        </div>
      </div>
    </main>
  )
}

const