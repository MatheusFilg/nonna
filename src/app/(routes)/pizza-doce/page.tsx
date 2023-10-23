import MenuItem from '@/components/MenuItem'

export default function PizzaDoce() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex h-[120px] w-[400px] items-center justify-center bg-gradient-to-tr from-ired-800 via-ired-600 to-ired-800 p-2 lg:h-[240px] lg:w-[775px]">
        <h1 className="font-popp text-5xl lg:text-7xl">Pizza Doce</h1>
      </div>

      <div className="flex w-[350px] flex-col items-center gap-2 align-middle lg:grid lg:w-[775px] lg:grid-cols-2 lg:gap-4">
        <MenuItem
          title="Coca cola (500 ml)"
          price="5,99"
          description="refrigerante"
        />

        <MenuItem
          title="Coca cola (500 ml)"
          price="5,99"
          description="refrigerante"
        />

        <MenuItem
          title="Coca cola (500 ml)"
          price="5,99"
          description="refrigerante"
        />

        <MenuItem
          title="Coca cola (500 ml)"
          price="5,99"
          description="refrigerante"
        />

        <MenuItem
          title="Coca cola (500 ml)"
          price="5,99"
          description="refrigerante"
        />

        <MenuItem
          title="Coca cola (500 ml)"
          price="5,99"
          description="refrigerante"
        />
      </div>
    </div>
  )
}
