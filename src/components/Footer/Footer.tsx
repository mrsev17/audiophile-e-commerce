import { IconLogo, AppLink, IconFacebook, IconTwitter, IconInstagram } from '../../shared/UI'

export const Footer = () => {
  const links = ['home', 'headphones', 'speakers', 'earphones']

  const socials = [
    { icon: <IconFacebook />, href: 'facebook' },
    { icon: <IconTwitter />, href: 'twitter' },
    { icon: <IconInstagram />, href: 'instagram' },
  ]

  return (
    <footer className="bg-black-200 flex justify-center px-10">
      <div className="w-full max-w-[1110px] relative pt-[75px] pb-[48px]">
        <div className="bg-orange-200 h-[4px] w-[102px] absolute top-0 left-0 xs:left-1/2 xs:-translate-x-1/2"></div>
        <div className="w-full max-w-[1110px] flex flex-col">
          <div className="w-full flex justify-between items-center mb-[36px] lg:flex-col lg:items-start lg:gap-[32px] xs:items-center">
            <IconLogo />
            <ul className="flex gap-[34px] xs:flex-col xs:items-center xs:gap-4">
              {links.map((link) => (
                <li key={link}>
                  <AppLink
                    path={link}
                    children={link}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-end mb-[56px]">
            <p className="text-white text-[0.9375rem] leading-[25px] opacity-50 max-w-[540px] lg:max-w-[680px] xs:text-center">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
              specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility -
              we’re open 7 days a week.
            </p>
            <ul className="flex items-center gap-4 lg:hidden">
              {socials.map((icons) => (
                <li key={icons.href}>
                  <AppLink path={icons.href}>{icons.icon}</AppLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between xs:flex-col xs:items-center xs:gap-[48px]">
            <p className="text-white text-[0.9375rem] leading-[25px] opacity-50">&copy; 2021. All Rights Reserved.</p>
            <ul className="lg:flex items-center gap-4 hidden">
              {socials.map((icons) => (
                <li key={icons.href}>
                  <AppLink path={icons.href}>{icons.icon}</AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
