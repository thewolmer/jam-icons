import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowsCorners = ({
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
    <path d="M1 0h6a1 1 0 1 1 0 2H3.414L18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgArrowsCorners;