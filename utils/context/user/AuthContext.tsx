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
  signInWithRedirect,
  onAuthStateChanged,
} from 'firebase/auth'
import { FirebaseConfig } from 'lib/Firebase'

type AuthContextType = {
  currentUser: User | null,
  login?: () => void,
  logout?: () => void
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
  
  const login = () => {
    router.push('/user/dashboard')
    signInWithRedirect(auth, provider).then(() => {
    }).catch(e => {console.log(e)})
  }

  const logout = () => {
    auth.signOut().then(() => {
      router.push('/')
      
    }).catch(e => {console.log(e)})
  }

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  
  const values: AuthContextType = {
    currentUser,
    login,
    logout
  }
  
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}