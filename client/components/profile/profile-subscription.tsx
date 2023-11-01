import { Button } from '../ui/button'

export default function ProfileSubscription() {
  return (
    <div className="flex flex-col gap-5 p-4">
      <p>Subscription</p>

      <div className="flex flex-col px-5 ">
        <Button className="bg-sky-500 hover:bg-sky-700 rounded-full flex justify-between  text-white ">
          <span>Subscribe</span>
          <span>FOR FREE</span>
        </Button>
      </div>

      <div className="flex justify-between text-sm">
        <span>Expired</span>
        <span>Jun 19, 2023</span>
      </div>
    </div>
  )
}
