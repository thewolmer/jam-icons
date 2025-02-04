import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 13.758v6.1a1 1 0 0 1-2 0v-6.1A5 5 0 0 1 2.118 4.77a5.002 5.002 0 0 1 9.764 0A5 5 0 0 1 8 13.758" />
  </svg>
);
export default SvgTreeF;
