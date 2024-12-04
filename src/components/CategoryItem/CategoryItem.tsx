interface CategoryItemProps {
  image: string
  title: string
  path?: string
}

export const CategoryItem = ({ image, title }: CategoryItemProps) => {
  return (
    <div className="w-full max-w-[350px] h-[264px] lg:h-[212px] flex flex-col justify-end relative">
      <div className="w-full h-[204px] lg:h-[160px] bg-grey-200 rounded-lg flex flex-col justify-end items-center">
        <h3 className="mb-[15px] uppercase text-[1.1rem] font-bold leading-[25px] tracking-[2px]">{title}</h3>
      </div>
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[240px] lg:w-[180px] lg:h-[160px]"
        src={image}
        alt={title}
      />
    </div>
  )
}
