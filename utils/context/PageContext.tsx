import { createContext, Dispatch, ReactNode, 
  SetStateAction, useCallback, useContext, useEffect, useState } from "react"

type PageContextType = {
    page: string
    setPage?: any
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
    console.log('moge')
    setHoge(localStorage.getItem('page') || 'index')
  }, [setHoge])
  
  // useCallbac調べる
  const setPage = useCallback((v: string) => {
    console.log('hoge')
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