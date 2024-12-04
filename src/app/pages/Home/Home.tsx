import { CategoryItem } from '../../../components'
import headphones from '../../../assets/images/category-headphones.png'
import speakers from '../../../assets/images/category-speakers.png'
import earphones from '../../../assets/images/category-earphones.png'

const categories = [
  {
    image: headphones,
    title: 'Headphones',
    path: '#',
  },
  {
    image: speakers,
    title: 'Speakers',
    path: '#',
  },
  {
    image: earphones,
    title: 'Earphones',
    path: '#',
  },
]

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      Home page
      <section className="max-w-[1110px] w-full my-[40px] px-10 ">
        <div className="flex justify-between gap-3 w-full md:flex-col md:gap-4 items-center">
          {categories.map((category) => (
            <CategoryItem
              key={category.title}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
