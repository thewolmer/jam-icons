import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfinite = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 5.5a3.5 3.5 0 1 0 .668-2.057 6.5 6.5 0 0 0-1.001-1.887A5.5 5.5 0 1 1 10 8.663 5.5 5.5 0 1 1 11 5.5" />
  </svg>
);
export default SvgInfinite;
