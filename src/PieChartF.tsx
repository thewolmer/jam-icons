import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPieChartF = ({
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
    <path d="M19.95 11c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05V11zm0-2H11V.05A10 10 0 0 1 19.95 9" />
  </svg>
);
export default SvgPieChartF;
