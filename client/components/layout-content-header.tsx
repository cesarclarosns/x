"use client"

import * as React from "react"
import { cn } from "@/libs/utils"

interface ILayoutContentHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutContentHeader = React.forwardRef<
  HTMLDivElement,
  ILayoutContentHeaderProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col justify-center px-4 h-14 border-solid border-b-[1px] border-r-[1px] border-gray-800",
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  )
})

LayoutContentHeader.displayName = "LayoutContentHeader"
export default LayoutContentHeader
