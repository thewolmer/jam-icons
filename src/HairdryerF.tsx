import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHairdryerF = ({
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
    <path d="M6 10.286V1.714h3.2a6 6 0 0 1 8.686 8.27l1.925 5.286a3 3 0 1 1-5.638 2.052l-1.982-5.444a6 6 0 0 1-2.99-1.592zm-2 0H2a2 2 0 0 1-2-2V3.714a2 2 0 0 1 2-2h2zM12 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgHairdryerF;