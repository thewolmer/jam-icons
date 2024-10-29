import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronsCircleLeft = ({
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-3.172-8 2.122 2.121a1 1 0 0 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829A1 1 0 1 1 8.95 7.88zm4.99 0 2.121 2.121a1 1 0 0 1-1.414 1.415l-2.828-2.829a1 1 0 0 1 0-1.414l2.828-2.829A1 1 0 0 1 13.94 7.88z" />
  </svg>
);
export default SvgChevronsCircleLeft;
