"use client"

import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface CustomScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  viewportClassName?: string
  orientation?: "vertical" | "horizontal" | "both"
  scrollbarSize?: number
  scrollbarThumbClassName?: string
  scrollbarTrackClassName?: string
}

const CustomScrollArea = forwardRef<HTMLDivElement, CustomScrollAreaProps>(
  (
    {
      children,
      className,
      viewportClassName,
      orientation = "vertical",
      scrollbarSize = 0,
      ...props
    },
    ref,
  ) => {
    const scrollbarStyles = {
      vertical: {
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
      },
      horizontal: {
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
      },
      both: {
        overflow: "auto",
        scrollbarWidth: "none",
      },
    }

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
        <div
          className={cn("h-full w-full", viewportClassName)}
          style={{
            ...scrollbarStyles[orientation],
            // Custom scrollbar styling for webkit browsers
            "--scrollbar-size": `${scrollbarSize}px`,
          } as unknown as React.CSSProperties}
        >
          {children}
        </div>

        <style jsx>{`
          div {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          div::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
          }
          
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          
          div::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 0;
            border: 0;
          }
        `}</style>
      </div>
    )
  },
)

CustomScrollArea.displayName = "CustomScrollArea"

export { CustomScrollArea }