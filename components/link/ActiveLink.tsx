import { ReactElement } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

type Props = {
  children: string
  path: string
}

export const ActiveLink: React.FC<Props> = ({ children, path }: Props): ReactElement => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <Link href={path}>
      <a className={'mr-1 ml-1 py-2 px-4 flex' + (currentPath === path ? ' text-indigo-500 border-indigo-500 border-b-2' : '')}>
        {children}
      </a>
    </Link>
  )
}