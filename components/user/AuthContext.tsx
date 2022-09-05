import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type AuthContextType = {
    currentUser: string
    setCurrentUser: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContextType>({currentUser: 'false', setCurrentUser: ()=>{}})
export const useAuth = () => {
    return useContext(AuthContext)
}

type Props = {
    children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState('false')
  const values: AuthContextType = {
    currentUser,
    setCurrentUser
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}