import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMugF = ({
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
    <path d="M14.874 3H16a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h7a4 4 0 0 1 3.874 3M15 12h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1z" />
  </svg>
);
export default SvgMugF;
