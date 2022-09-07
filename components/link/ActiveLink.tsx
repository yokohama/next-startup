import { ReactElement } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

type Props = {
  children: ReactElement
  path: string
}

export const ActiveLink: React.FC<Props> = ({ children, path }: Props): ReactElement => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <Link href={path}>
    <a class="text-gray-300  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium" href="/#">
    <a class="text-gray-800  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium" href="/#">
      <a className={'' + currentPath === path ? '' : ''}>
        {children}
      </a>
    </Link>
  )
}