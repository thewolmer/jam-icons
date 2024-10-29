import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6.5 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.828 8.9h5.586a1 1 0 0 1 0 2h-8a.997.997 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.585L9.192.707a1 1 0 1 1 1.415 1.414z" />
  </svg>
);
export default SvgArrowDownLeft;
