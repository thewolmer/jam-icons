import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChronometer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 11h2a1 1 0 0 1 0 2H8a.997.997 0 0 1-1-1V8a1 1 0 1 1 2 0zM1.869 6.861a1.5 1.5 0 1 1 2.077-1.76 8 8 0 0 1 1.126-.548A2.5 2.5 0 0 1 6.5 0h3a2.5 2.5 0 0 1 1.428 4.553q.586.231 1.126.548a1.5 1.5 0 1 1 2.077 1.76 8 8 0 1 1-12.263 0zM8 18A6 6 0 1 0 8 6a6 6 0 0 0 0 12M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
  </svg>
);
export default SvgChronometer;
