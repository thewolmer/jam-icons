import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronsCircleUpRightF = ({
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
    <path d="M9 11v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zm3-3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2zm-2 12C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgChevronsCircleUpRightF;
