import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    <a className={`btn btn--${variant} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
