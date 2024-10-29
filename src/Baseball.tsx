import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBaseball = ({
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
    <path d="M13.05 11H13a1 1 0 0 1 0-2h.05a9.95 9.95 0 0 1 2.065-5.151A7.97 7.97 0 0 0 10 2a7.97 7.97 0 0 0-5.115 1.849A9.95 9.95 0 0 1 6.95 9H7a1 1 0 1 1 0 2h-.05a9.95 9.95 0 0 1-2.065 5.151A7.97 7.97 0 0 0 10 18a7.97 7.97 0 0 0 5.115-1.849A9.95 9.95 0 0 1 13.05 11m2.012-1.998a1 1 0 0 1 0 1.996 7.96 7.96 0 0 0 1.438 3.668A7.97 7.97 0 0 0 18 10c0-1.71-.538-3.329-1.5-4.666a7.96 7.96 0 0 0-1.438 3.668M4.938 10.998a1 1 0 0 1 0-1.996A7.96 7.96 0 0 0 3.5 5.334 7.97 7.97 0 0 0 2 10c0 1.71.538 3.329 1.5 4.666a7.96 7.96 0 0 0 1.438-3.668M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgBaseball;
