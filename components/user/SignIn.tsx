import { useAuth } from 'components/user/AuthContext'
import { usePage } from 'components/PageContext'

export const SignIn = () => {
  const { setPage } = usePage()
  const { setCurrentUser } = useAuth()
  
  const onHandleSignIn = () => {
    setCurrentUser('true')
    setPage('dashboard')
  }

  return(
  <div>
    <h1>SignIn</h1>
    <button onClick={onHandleSignIn}>新規登録</button>
  </div>
  )
}