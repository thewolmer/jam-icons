import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMale = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.364 14.636a5 5 0 1 0 7.071-7.071 5 5 0 0 0-7.071 7.071m7.728-9.142 2.553-2.553h-1.517a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1v4a1 1 0 1 1-2 0V4.286l-2.622 2.622A7.002 7.002 0 0 1 2.95 16.05a7 7 0 0 1 9.142-10.556" />
  </svg>
);
export default SvgMale;
