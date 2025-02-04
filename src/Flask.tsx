import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlask = ({
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
    <path d="M6 2v5.938l-1.142.542a5 5 0 1 0 4.284 0L8 7.938V2zM4 6.674V0h6v6.674a7 7 0 1 1-6 0M3.535 11h6.93a4 4 0 1 1-6.93 0M4 0h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2" />
  </svg>
);
export default SvgFlask;
