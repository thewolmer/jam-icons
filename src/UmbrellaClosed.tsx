import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUmbrellaClosed = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 13.418 0 15 6.234 1.642a1 1 0 1 1 1.533 0L14 15l-6-1.582V17a1 1 0 0 0 2 0 1 1 0 0 1 2 0 3 3 0 0 1-6 0zM7 4.73l-3.383 7.249L7 11.086l3.383.892L7 4.729z" />
  </svg>
);
export default SvgUmbrellaClosed;
