import { ReactElement } from "react"

import Link from 'next/link'
import { useRouter } from "next/router"

type Props = {
  children: string
  href: string
}
export const ActiveLink = ({ children, href }: Props): ReactElement => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <Link href={href}>
      <a className={'mr-2 ml-2 py-1 px-4 flex' + (currentPath === href ? ' text-indigo-500 border-indigo-500 border-b-2' : '')}>
        {children}
      </a>
    </Link>
  )
}