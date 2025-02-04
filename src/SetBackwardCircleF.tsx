import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSetBackwardCircleF = ({
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
    <path d="M7.514 8.164V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-2.164l3.93 2.808c.904.646 2.13.389 2.736-.576.218-.346.334-.753.334-1.17V7.102c0-1.16-.883-2.102-1.972-2.102-.391 0-.773.124-1.098.356zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m2.561-12.898v5.796L8.506 10z" />
  </svg>
);
export default SvgSetBackwardCircleF;
