import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoreHorizontalF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -9 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-7 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
);
export default SvgMoreHorizontalF;
