import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 3v2a2 2 0 1 0 4 0V3h6v2a2 2 0 1 0 4 0V3a3 3 0 0 1 3 3v2H0V6a3 3 0 0 1 3-3m17 7v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6zM15 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1M5 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgCalendarF;
