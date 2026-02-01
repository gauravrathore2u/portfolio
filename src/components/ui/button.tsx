import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean // keeping this to avoid breaking callers, but it won't do anything or we throw error
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & { href?: string; download?: string; target?: string; rel?: string }>(
  ({ className, variant = "default", size = "default", href, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { asChild, ...restProps } = props

    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "h-10 px-4 py-2": size === "default",
        "h-9 rounded-md px-3": size === "sm",
        "h-11 rounded-md px-8": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    )

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {restProps.children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...restProps}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
