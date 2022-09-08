import { useEffect } from 'react'

import { 
  ReactNode, 
  createContext, 
  useContext, 
  useState, 
  Dispatch,
  SetStateAction
} from 'react'
import { useRouter } from 'next/router'

import { initializeApp } from 'firebase/app'
import {
  User,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth'
import { FirebaseConfig } from 'lib/Firebase'

type AuthContextType = {
  currentUser: User | null
  setCurrentUser?: Dispatch<SetStateAction<User | null>>
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
  const pathname = router.pathname

  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [auth.currentUser])
  
  const PublicPathname: string[] = [
    '/',
    '/about',
    '/faq',
    '/terms',
    '/privacy_policy',
    '/get_start',
  ]
  
  const LoggedInPathname: string[] = [
    '/dashboard'
  ]
  
  const values: AuthContextType = {
    currentUser,
    setCurrentUser
  }
  
  return (
    <AuthContext.Provider value={values}>
      { PublicPathname.includes(pathname) && children }
      { LoggedInPathname.includes(pathname) && currentUser && children }
    </AuthContext.Provider>
  )
}