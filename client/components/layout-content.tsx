import React from "react"
import { cn } from "@/libs/utils"

interface ILayoutContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutContent = React.forwardRef<HTMLDivElement, ILayoutContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        {...props}
        className={cn(
          "flex flex-col border-solid border-b-[1px] border-r-[1px] border-gray-800",
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

LayoutContent.displayName = "LayoutContent"
export default LayoutContent
