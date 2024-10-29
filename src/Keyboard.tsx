import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboard = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 4h2v2H3zm0-3h2v2H3zm0 6h2v2H3zm3 0h8v2H6zm0-3h2v2H6zm0-3h2v2H6zm3 3h2v2H9zm0-3h2v2H9zm6 6h2v2h-2zm-3-3h2v2h-2zm0-3h2v2h-2zm3 0h2v5h-2z" />
  </svg>
);
export default SvgKeyboard;
