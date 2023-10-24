import Image from 'next/image'
import pizza from '../public/pizza.png'

interface CardProps {
  text: string
  redirect?: string
}

export default function Card({ text, redirect }: CardProps) {
  return (
    <a
      className="flex h-[120px] w-[350px] cursor-pointer flex-row items-center space-x-5 rounded-lg bg-gradient-to-tr from-ired-700 via-ired-600 to-ired-700 p-2 lg:h-[140px] lg:w-[525px] lg:space-x-10"
      href={`/${redirect}`}
    >
      <Image src={pizza} alt="" className="h-full w-24 rounded-sm lg:w-36" />
      <h1 className="font-popp text-3xl uppercase leading-relaxed lg:text-[40px]">
        {text}
      </h1>
    </a>
  )
}
