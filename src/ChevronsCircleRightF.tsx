import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronsCircleRightF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m3.175-9.976-2.122 2.121a1 1 0 0 0 1.414 1.414l2.829-2.828a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 1 0-1.414 1.415zm-4.99 0-2.121 2.121a1 1 0 0 0 1.414 1.414l2.828-2.828a1 1 0 0 0 0-1.414L7.478 6.488a1 1 0 0 0-1.414 1.415z" />
  </svg>
);
export default SvgChevronsCircleRightF;
