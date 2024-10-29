import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTableRowAbove = ({
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
    <path d="M12 8V2h-1a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v6zm0 2h-2v2h2zm-4 2v-2H6v2zm-4 0v-2H2v2zm2-9V2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H8v1a1 1 0 1 1-2 0V5H5a1 1 0 1 1 0-2z" />
  </svg>
);
export default SvgTableRowAbove;
