interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'orange' | 'blackAndWhite'
}

interface VariantClasses {
  [key: string]: string
}

export const Button = ({ children, variant }: ButtonProps) => {
  const variantClasses: VariantClasses = {
    blackAndWhite: 'border-black-200 hover:bg-black-200 hover:text-white transition duration-400',
    orange:
      'text-white bg-orange-200 border-orange-200 hover:bg-orange-100 hover:text-white hover:border-orange-100 transition duration-400',
  }

  const selectedVariant = variantClasses[variant]

  return (
    <button
      className={`flex justify-center items-center text-[13px] leading-[18px] uppercase bold w-full h-[48px] max-w-[160px] border ${selectedVariant}`}>
      {children}
    </button>
  )
}
