import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJoystickF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.915 13H9V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874V13h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h.085A1.5 1.5 0 0 1 4.5 12h2a1.5 1.5 0 0 1 1.415 1" />
  </svg>
);
export default SvgJoystickF;
