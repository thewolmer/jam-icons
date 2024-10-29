import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDashboard = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.832 14A10 10 0 0 1 0 10C0 4.477 4.477 0 10 0s10 4.477 10 10a10 10 0 0 1-.832 4zm16.916-2a8 8 0 1 0-15.497 0zM10 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-5-3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgDashboard;
