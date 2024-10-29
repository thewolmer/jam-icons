import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPadlockAltOpenF = ({
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
    <path d="M2 9.528V4a4 4 0 1 1 8 0v1a1 1 0 1 1-2 0V4a2 2 0 1 0-4 0v4.341a6 6 0 1 1-2 1.186zM6 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgPadlockAltOpenF;
