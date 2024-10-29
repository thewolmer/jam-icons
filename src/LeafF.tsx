import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeafF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3.5 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.32 13.211a7 7 0 0 1 .594-6.757Q4.078 3.249 16.084.801q-.402 10.277-2.563 13.482a7 7 0 0 1-9.467 2.05 7.6 7.6 0 0 1 2.27-2.482l.507-.352a2 2 0 1 0-2.278-3.288l-.507.352A11.6 11.6 0 0 0 1.32 13.21zm.746 6.86a1 1 0 1 1-2 0c0-3.466 1.7-6.712 4.55-8.686l.507-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.57 8.57 0 0 0-3.689 7.042" />
  </svg>
);
export default SvgLeafF;
