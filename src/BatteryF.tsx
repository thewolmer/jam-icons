import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBatteryF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 0h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2" />
    <path d="M18.5 3h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.5A1.5 1.5 0 0 1 17 7.5v-3A1.5 1.5 0 0 1 18.5 3" />
  </svg>
);
export default SvgBatteryF;
