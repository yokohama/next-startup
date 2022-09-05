import { useAuth } from 'components/user/AuthContext'
import { ReactNode, FC } from 'react'

type Props = {
  children?: ReactNode
}

export const ShowWithLogin: FC<Props> = ({ children }) => {
  const { currentUser } = useAuth()

  if (currentUser === 'true') {
    return(
      <>
        {children}
      </>
    )
  } else {
    return <></>
  }
}

export const ShowWithNoLogin: FC<Props> = ({ children }) => {
  const { currentUser } = useAuth()

  if (currentUser === 'false') {
    return(
      <>
        {children}
      </>
    )
  } else {
    return <></>
  }
}