import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocumentF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m1 7a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zM4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgDocumentF;
