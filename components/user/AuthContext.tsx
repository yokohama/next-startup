import { 
  ReactNode, 
  createContext, 
  useContext, 
  useState, 
  useEffect
} from 'react'

import { initializeApp, FirebaseApp } from 'firebase/app'
import {
  User,
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'
import { FirebaseConfig } from 'components/FirebaseConfig'

type AuthContextType = {
  currentUser: User | null,
}

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)

const AuthContext = createContext<AuthContextType>({currentUser: auth.currentUser})
export const useAuth = () => {
    return useContext(AuthContext)
}

type Props = {
    children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  
  const values: AuthContextType = {
    currentUser,
  }
  
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}