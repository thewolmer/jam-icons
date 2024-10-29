import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarmClock = ({
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
    <path d="M11 10h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0zm7.63-1.562a9 9 0 1 1-17.26 0 5 5 0 1 1 7.668-6.387 9 9 0 0 1 1.924 0 5 5 0 1 1 7.668 6.387m-.938-2.113a3 3 0 0 0-4.48-3.735 9.03 9.03 0 0 1 4.48 3.735M6.787 2.59a3 3 0 0 0-4.48 3.735 9.03 9.03 0 0 1 4.48-3.735M10 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
  </svg>
);
export default SvgAlarmClock;
