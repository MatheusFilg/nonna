interface MenuItemProps {
  title: string
  description: string
  price: string
}

export default function MenuItem({ title, description, price }: MenuItemProps) {
  return (
    <div className="flex max-h-[95px] w-full flex-col rounded bg-zinc-600 px-4 py-2">
      <h1 className="font-inter text-lg font-semibold">{title}</h1>
      <div className="mt-2 flex flex-col">
        <span className="font-inter text-sm text-zinc-100">{description}</span>
        <span className="font-inter text-base font-semibold">R$ {price}</span>
      </div>
    </div>
  )
}
