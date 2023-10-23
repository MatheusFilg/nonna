import { ChevronLeft } from 'lucide-react'

interface RoutesLayoutProps {
  children: React.ReactNode
}

export default function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <a href="/" className="flex items-start">
        <button className="rounded-full bg-zinc-900 p-2 text-red-600 hover:bg-zinc-800">
          <ChevronLeft />
        </button>
      </a>

      {children}
    </div>
  )
}
