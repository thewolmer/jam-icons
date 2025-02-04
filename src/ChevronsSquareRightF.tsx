import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronsSquareRightF = ({
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m9.212 10.021-2.121 2.122a1 1 0 0 0 1.414 1.414l2.828-2.829a1 1 0 0 0 0-1.414l-2.828-2.828A1 1 0 1 0 11.09 7.9l2.12 2.121zm-4.99 0-2.12 2.122a1 1 0 0 0 1.413 1.414l2.829-2.829a1 1 0 0 0 0-1.414L7.515 6.486A1 1 0 0 0 6.101 7.9z" />
  </svg>
);
export default SvgChevronsSquareRightF;
