import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboardF = ({
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
    <path d="M9 2v2H5V2H3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zM5 6h4a2 2 0 0 0 2-2V2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v2a2 2 0 0 0 2 2M4 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2zm0 5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgClipboardF;
