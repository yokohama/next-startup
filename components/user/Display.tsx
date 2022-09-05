import { useAuth } from 'components/user/AuthContext'
import { ReactNode, FC } from 'react'

type Props = {
  children?: ReactNode
}

export const ShowWithLogin: FC<Props> = ({ children }) => {
  const { currentUser } = useAuth()
  return currentUser ? <>{children}</> : <></>
}

export const ShowWithNoLogin: FC<Props> = ({ children }) => {
  const { currentUser } = useAuth()
  return !currentUser ? <>{children}</> : <></>
}