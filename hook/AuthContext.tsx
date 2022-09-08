import { 
  ReactNode, 
  createContext, 
  useContext, 
  useState, 
  useEffect
} from 'react'
import { useRouter } from 'next/router'

import { initializeApp } from 'firebase/app'
import {
  User,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth'
import { FirebaseConfig } from 'lib/Firebase'

type AuthContextType = {
  currentUser: User | null
}

export const app = initializeApp(FirebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider

const AuthContext = createContext<AuthContextType>({currentUser: auth.currentUser})
export const useAuth = () => {
  return useContext(AuthContext)
}

type Props = {
  children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()

  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [auth.currentUser])
  
  const values: AuthContextType = {
    currentUser,
  }
  
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}