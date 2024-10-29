import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTemperature = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 15a5 5 0 1 1-8-4V3a3 3 0 1 1 6 0v8c1.214.912 2 2.364 2 4m-3.201-2.401-.799-.6V3a1 1 0 1 0-2 0v8.999l-.799.6a3 3 0 1 0 3.598 0M5 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgTemperature;
