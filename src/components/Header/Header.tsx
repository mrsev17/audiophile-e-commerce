import { useState } from 'react'
import { IconLogo, IconCart, IconBurger, AppLink } from '../../shared/UI'

const links = ['home', 'headphones', 'speakers', 'earphones']

export const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)

  const burgerMenuHandler = () => setBurgerMenu(!burgerMenu)

  return (
    <header className={`flex justify-center px-10 ${burgerMenu ? 'bg-black-200' : ''}`}>
      <div className="w-full max-w-[1110px] flex justify-between border-b border-b-gray-600 py-8">
        <div className="w-full max-w-[720px] flex justify-between items-center md:max-w-[200px]">
          <button
            className="hidden md:block"
            onClick={burgerMenuHandler}>
            <IconBurger />
          </button>
          <IconLogo />
          <ul className="flex gap-[34px] md:hidden">
            {links.map((link) => (
              <li key={link}>
                <AppLink
                  children={link}
                  path={`${link !== 'home' ? link : '/'}`}
                />
              </li>
            ))}
          </ul>
          {burgerMenu && (
            <ul className="flex flex-col items-end bg-black-200 gap-[34px] absolute left-0 top-[89px] py-6 px-[40px] w-full z-10">
              {links.map((link) => (
                <li
                  key={link}
                  onClick={burgerMenuHandler}>
                  {
                    <AppLink
                      children={link}
                      path={`${link !== 'home' ? link : '/'}`}
                    />
                  }
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="pl-6">
          <AppLink path="cart">
            <IconCart />
          </AppLink>
        </div>
      </div>
    </header>
  )
}
