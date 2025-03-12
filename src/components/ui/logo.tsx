import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Origami } from "lucide-react";

const logoVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 focus-visible:ring-cyan-400"
      },
      size: {
        default: "size-9 p-3",
        sm: "size-8 rounded-md p-2 text-xs",
        lg: "size-10 rounded-md p-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface LogoProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof logoVariants> {
  asChild?: boolean;
  withText?: string;
}

const Logo = React.forwardRef<HTMLButtonElement, LogoProps>(
  (
    { className, variant, children, size, withText, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <Comp
          className={cn(logoVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {asChild ? children : <Origami />}
        </Comp>
        {withText && (
          <p className="text-xl font-semibold tracking-tight">{withText}</p>
        )}
      </>
    );
  }
);
Logo.displayName = "Logo";

export { Logo, logoVariants };
