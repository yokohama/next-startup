import { ReactElement } from "react"

type Props = {
  href: string
  children: ReactElement | string
}

export const FooterLink = ({ href, children }: Props) => {
  return(
    <li className="my-2">
      <a className="text-white hover:text-gray-300 transition-colors duration-200" href={href}>
        {children}
      </a>
    </li>
  )
}