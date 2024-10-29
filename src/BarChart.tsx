import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBarChart = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m12 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1M7 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgBarChart;
