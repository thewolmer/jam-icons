import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrophy = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 18h6v-1H2zm.294-3Q1.394 12.263 1 9 .457 4.5 1 0h8q.466 4.993 0 9a32.7 32.7 0 0 1-1.287 6H8a2 2 0 0 1 2 2v3H0v-3a2 2 0 0 1 2-2zm.692-6.24q.417 3.455 1.423 6.24H5.61a31 31 0 0 0 1.402-6.231Q7.369 5.713 7.147 2h-4.33a35.5 35.5 0 0 0 .168 6.76z" />
  </svg>
);
export default SvgTrophy;
