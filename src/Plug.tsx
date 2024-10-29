import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlug = ({
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
    <path d="M2 9v3.5A3.5 3.5 0 0 0 5.5 16h1a3.5 3.5 0 0 0 3.5-3.5V9zm6-2V1a1 1 0 1 1 2 0v6a2 2 0 0 1 2 2v3.5a5.5 5.5 0 0 1-4.155 5.334A1.5 1.5 0 0 1 6.5 20h-1a1.5 1.5 0 0 1-1.345-2.166A5.5 5.5 0 0 1 0 12.5V9a2 2 0 0 1 2-2V1a1 1 0 1 1 2 0v6z" />
  </svg>
);
export default SvgPlug;