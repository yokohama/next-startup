import { createContext, Dispatch, ReactNode, 
  SetStateAction, useContext, useState } from "react"

type PageContextType = {
    page: string
    setPage: Dispatch<SetStateAction<string>>
}

const PageContext = createContext<PageContextType>({page: '', setPage: ()=>{}})
export const usePage = () => {
    return useContext(PageContext)
}

type Props = {
    children: ReactNode
}
export const PageProvider = ({ children }: Props) => {
  const [page, setPage] = useState('index')
  const values: PageContextType = {
    page,
    setPage
  }
  return (
    <PageContext.Provider value={values}>
      {children}
    </PageContext.Provider>
  )
}