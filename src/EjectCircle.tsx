import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEjectCircle = ({
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m1.746-12.587 2.898 4.055c.646.905.389 2.13-.576 2.737a2.2 2.2 0 0 1-1.17.334H7.102c-1.16 0-2.102-.883-2.102-1.972 0-.391.124-.774.356-1.099l2.898-4.055c.647-.905 1.952-1.146 2.917-.54.227.143.422.327.575.54m-4.644 5.154h5.796L10 6.512zM6 13.539h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2" />
  </svg>
);
export default SvgEjectCircle;
