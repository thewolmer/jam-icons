import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPicturesF = ({
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
    <path d="m16 14.606-1.339-1.287a3 3 0 0 0-4.8.52L5.94 20H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 2.752V18a2 2 0 0 1-2 2H8.512l3.077-5.154a1 1 0 0 1 1.6-.174zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M4 5V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.76l-1.339-1.441a3 3 0 0 0-1.887-.953C16.408 5.557 15.64 5 14.75 5h-1.92a3.001 3.001 0 0 0-5.66 0zm13 9V8.512a1 1 0 0 1 .189.16L20 11.661V12a2 2 0 0 1-2 2z" />
  </svg>
);
export default SvgPicturesF;