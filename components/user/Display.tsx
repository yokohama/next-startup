import { useAuth } from 'components/user/AuthContext'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ShowWithLogin = ({ children }: Props): ReactNode => {
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

export const ShowWithNoLogin = ({ children }: Props): ReactNode => {
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