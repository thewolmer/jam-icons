import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayersF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m10.638.786 8.85 3.551a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 6.19a1 1 0 0 1 .01-1.852L9.892.786a1 1 0 0 1 .746 0m5.759 8.31 3.091 1.241a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 12.19a1 1 0 0 1 .01-1.852l3.091-1.24 5.176 2.142a2.5 2.5 0 0 0 1.912 0l5.176-2.142z" />
  </svg>
);
export default SvgLayersF;
