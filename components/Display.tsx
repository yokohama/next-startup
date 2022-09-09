import { ReactNode } from 'react'
import { User } from 'firebase/auth'

type Props = {
  required: User | null
  children?: ReactNode
}

export const ShowWithLogin = ({ children, required }: Props) => {
  return required ? <>{children}</> : <></>
}

export const ShowWithNoLogin = ({ children, required }: Props) => {
  return !required ? <>{children}</> : <></>
}