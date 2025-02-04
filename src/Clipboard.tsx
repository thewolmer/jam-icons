import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboard = ({
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
    <path d="M5 2v2h4V2zm6 0h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m0 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2H2v14h10V4zM4 8h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 5h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2" />
  </svg>
);
export default SvgClipboard;
