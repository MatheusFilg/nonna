/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import logo from './icon.png'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 py-4 align-middle">
      <div className="flex items-center justify-center align-middle">
        <Image
          src={logo}
          alt=""
          className="h-32 w-32 rounded-full lg:h-36 lg:w-36"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-x-8 gap-y-6 align-middle lg:grid lg:grid-cols-2">
        <Card redirect="bebidas" text="BEBIDAS" />
        <Card redirect="entradas" text="ENTRADAS" />
        <Card redirect="lanches" text="LANCHES" />
        <Card redirect="pizza-doce" text="PIZZAS DOCE" />
        <Card redirect="pizzas" text="PIZZAS" />
        <Card redirect="sobremesas" text="SOBREMESAS" />
      </div>
    </div>
  )
}
