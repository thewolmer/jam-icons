import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 12H8a1 1 0 0 0 0 2h3.659a6.02 6.02 0 0 1-3.686 3.668 2 2 0 1 1-3.945 0A6.02 6.02 0 0 1 .34 14H4a1 1 0 0 0 0-2H0v-2h4a1 1 0 1 0 0-2H0V6h4a1 1 0 1 0 0-2H.341A6.002 6.002 0 0 1 11.66 4H8a1 1 0 1 0 0 2h4v2H8a1 1 0 1 0 0 2h4z" />
  </svg>
);
export default SvgMicF;
