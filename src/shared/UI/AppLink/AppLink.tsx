interface AppLinkProps {
  children: string | JSX.Element
}

export const AppLink = ({ children }: AppLinkProps) => {
  return (
    <a
      className="block text-white text-[0.8125rem] bold leading-[25px] tracking-[2px] cursor-pointer uppercase hover:text-orange-200 transition duration-400 xs:text-[1.4rem]"
      href="#">
      {children}
    </a>
  )
}
