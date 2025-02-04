import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTableColBefore = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 12V2H2v1a1 1 0 1 1-2 0V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a1 1 0 0 1 2 0v1zm2 0h2v-2h-2zm2-4V6h-2v2zm0-4V2h-2v2zM3 6V5a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H5v1a1 1 0 1 1-2 0V8H2a1 1 0 1 1 0-2z" />
  </svg>
);
export default SvgTableColBefore;
