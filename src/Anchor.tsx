import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnchor = ({
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
    <path d="M16.93 11.998A1 1 0 0 1 17 10h2a1 1 0 0 1 0 2h-.055a9.001 9.001 0 0 1-17.89 0H1a1 1 0 0 1 0-2h2a1 1 0 0 1 .07 1.998A7.005 7.005 0 0 0 9 17.929V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874v10.055a7.005 7.005 0 0 0 5.93-5.931M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgAnchor;
