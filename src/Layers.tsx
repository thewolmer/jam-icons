import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayers = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.071 7.762 6.417 2.575a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 12.19a1 1 0 0 1 .01-1.852l6.53-2.62c.374-.15 1.556.29 2.693.294 1.215.004 2.387-.417 2.806-.249zM4.064 11.28l6.201 2.567 6.202-2.567-6.202-2.489zM10.638.786l8.85 3.551a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 6.19a1 1 0 0 1 .01-1.852L9.892.786a1 1 0 0 1 .746 0M4.064 5.28l6.201 2.567 6.202-2.567-6.202-2.489z" />
  </svg>
);
export default SvgLayers;
