import { usePage } from 'components/PageContext'
import { useAuth } from 'components/user/AuthContext'

import { ShowWithLogin, ShowWithNoLogin } from 'components/user/Display'

export const Header = () => {
    const { setPage } = usePage()
    const { currentUser, setCurrentUser } = useAuth()
    
    const handleOnLogin = () => {
      setCurrentUser('true')
      setPage('dashboard')
    }
    
    const handleOnLogout = () => {
      setCurrentUser('false')
      setPage('index')
    }
    
    return(
    <div>
      <a onClick={()=> {setPage('index')}}>Header</a>
      &nbsp;
      &nbsp;
      <a onClick={()=> {setPage('about')}}>About</a>
      &nbsp;
      &nbsp;
      <ShowWithLogin>
        <a onClick={()=> {setPage('profile')}}>Profile</a>
      </ShowWithLogin>
      &nbsp;
      &nbsp;
      <ShowWithLogin>
        <button onClick={handleOnLogout}>SignOut</button>
      </ShowWithLogin>
      <ShowWithNoLogin>
        <button onClick={handleOnLogin}>Login</button>
        <button onClick={()=> {setPage('signIn')}}>SignIn</button>
      </ShowWithNoLogin>
      &nbsp;
      &nbsp;
      { currentUser }
      <hr />
    </div>
    )
}