import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowsV = ({
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
    <path d="M5 16.573V3.419L2.464 5.954A1 1 0 0 1 1.05 4.54L5.293.297a1 1 0 0 1 1.414 0L10.95 4.54a1 1 0 1 1-1.414 1.414L7 3.42v13.154l2.536-2.536a1 1 0 1 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L1.05 15.451a1 1 0 1 1 1.414-1.414z" />
  </svg>
);
export default SvgArrowsV;
