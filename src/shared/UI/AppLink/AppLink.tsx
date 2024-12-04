import { NavLink } from 'react-router-dom'

interface AppLinkProps {
  children: string | JSX.Element
  path: string
}

export const AppLink = ({ children, path }: AppLinkProps) => {
  return (
    <NavLink
      className="block text-white text-[0.8125rem] bold leading-[25px] tracking-[2px] cursor-pointer uppercase hover:text-orange-200 transition duration-400 xs:text-[1.4rem]"
      to={path}>
      {children}
    </NavLink>
  )
}
