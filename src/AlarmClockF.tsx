import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarmClockF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.962 2.05a5 5 0 1 1 7.668 6.387 9.01 9.01 0 0 0-7.668-6.386zM1.37 8.439a5 5 0 1 1 7.668-6.387A9.01 9.01 0 0 0 1.37 8.438zM10 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14m1-8V6a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgAlarmClockF;
