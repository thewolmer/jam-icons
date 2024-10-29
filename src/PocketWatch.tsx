import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPocketWatch = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 13h2a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0zM7 5.732V5a1 1 0 1 1 2 0v.732a2 2 0 1 0-2 0m-2.041.866a4 4 0 1 1 6.082 0A8.002 8.002 0 0 1 8 22 8 8 0 0 1 4.959 6.598M8 20A6 6 0 1 0 8 8a6 6 0 0 0 0 12" />
  </svg>
);
export default SvgPocketWatch;
