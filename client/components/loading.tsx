import { Icons } from './ui/icons'

export default function Loading() {
  return (
    <div className="h-screen text-white font-bold flex flex-col justify-center items-center">
      <Icons.Spinner className="animate-spin"></Icons.Spinner>
    </div>
  )
}
