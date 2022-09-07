import { createContext, Dispatch, ReactNode, 
  SetStateAction, useCallback, useContext, useEffect, useState } from "react"

type PageContextType = {
    page: string
    setPage?: (v: string) => void
}

const PageContext = createContext<PageContextType>({page: ''})
export const usePage = () => {
    return useContext(PageContext)
}

type Props = {
    children: ReactNode
}

export const PageProvider = ({ children }: Props) => {
  const [page, setHoge] = useState<string>('')
  
  useEffect(() => {
    setHoge(localStorage.getItem('page') || 'index')
  }, [setHoge])
  
  // useCallbac調べる
  const setPage = useCallback((v: string) => {
    setHoge(v)
    localStorage.setItem('page', v)
  }, [setHoge])

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