import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGooglePlusCircle = ({
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M13.75 9.5V8.25h-.625V9.5h-1.25v.625h1.25v1.25h.625v-1.25H15V9.5zm-5.625 0v1.25h1.768A1.88 1.88 0 0 1 8.125 12a1.877 1.877 0 0 1-1.875-1.875c0-1.034.841-1.875 1.875-1.875.448 0 .88.16 1.214.453l.822-.943A3.1 3.1 0 0 0 8.125 7 3.13 3.13 0 0 0 5 10.125a3.13 3.13 0 0 0 3.125 3.125 3.13 3.13 0 0 0 3.125-3.125V9.5z" />
  </svg>
);
export default SvgGooglePlusCircle;
