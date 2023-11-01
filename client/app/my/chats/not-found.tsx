import Link from "next/link"

import LayoutContent from "@/components/layout-content"

export default function NotFoundPage() {
  return (
    <div className="flex-1 flex flex-col">
      <LayoutContent>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p>Sorry</p>
          <p>This page is not available</p>
          <p>
            The link you followed may be broken, or the page may have been
            removed.
          </p>
          <p>
            Go back to{" "}
            <span>
              <Link href="/" className=" hover:underline">
                x.com
              </Link>
            </span>
          </p>
        </div>
      </LayoutContent>
    </div>
  )
}
