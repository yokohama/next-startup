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
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth'
import { FirebaseConfig } from 'lib/Firebase'

export const app = initializeApp(FirebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider

const AuthContext = createContext({currentUser: auth.currentUser})
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const pathname = router.pathname

  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [auth.currentUser])
  
  const publicPathname: string[] = [
    '/',
    '/about',
    '/faq',
    '/terms',
    '/privacy_policy',
    '/get_start',
  ]
  
  const loggedInPathname: string[] = [
    '/dashboard'
  ]
  
  const values = {
    currentUser,
    setCurrentUser
  }
  
  return (
    <AuthContext.Provider value={values}>
      { publicPathname.includes(pathname) && children }
      { loggedInPathname.includes(pathname) && currentUser && children }
    </AuthContext.Provider>
  )
}
