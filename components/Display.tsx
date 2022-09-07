import { ReactNode, FC } from 'react'
import { User } from 'firebase/auth'

type Props = {
  required: User | null
  children?: ReactNode
}

export const ShowWithLogin: FC<Props> = ({ children, required }) => {
  return required ? <>{children}</> : <></>
}

export const ShowWithNoLogin: FC<Props> = ({ children, required }) => {
  return !required ? <>{children}</> : <></>
}