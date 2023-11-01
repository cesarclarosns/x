"use client"

import * as React from "react"
import { cn } from "@/libs/utils"

interface ILayoutContentContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutContentContainer = React.forwardRef<
  HTMLDivElement,
  ILayoutContentContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        "flex-1 flex flex-col border-solid border-t-[1px] border-l-[1px] border-gray-800",
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  )
})

LayoutContentContainer.displayName = "LayoutContentHeader"
export default LayoutContentContainer
