import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBranch = ({
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
    <path d="M3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1-7.002v3.173a3.001 3.001 0 1 1-2 0V5.829a3.001 3.001 0 1 1 2 0v2.34c.312-.11.647-.17.997-.171l6.037-.006a1 1 0 0 0 .999-1V5.84A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v1.175a3 3 0 0 1-2.997 3l-6.037.006a1 1 0 0 0-.999 1M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgBranch;
