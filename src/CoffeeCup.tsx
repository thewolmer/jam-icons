import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoffeeCup = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 4a6 6 0 1 0 12 0V2H2zm14-4h1a3 3 0 0 1 0 6h-1.252A8 8 0 0 1 0 4V0zm0 4h1a1 1 0 0 0 0-2h-1z" />
  </svg>
);
export default SvgCoffeeCup;
