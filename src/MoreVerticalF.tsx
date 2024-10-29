import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoreVerticalF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-9 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
);
export default SvgMoreVerticalF;
