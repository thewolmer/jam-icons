import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLtr = ({
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
    <path d="M9 2v9a1 1 0 0 1-2 0V6H6a3 3 0 1 1 0-6h7a1 1 0 0 1 0 2h-1v9a1 1 0 0 1-2 0V2zM1.657 9 .284 10.36a.955.955 0 0 0 0 1.358.977.977 0 0 0 1.373 0L3.716 9.68a.955.955 0 0 0 0-1.36l-2.06-2.038a.977.977 0 0 0-1.372 0 .955.955 0 0 0 0 1.359zM7 2H6a1 1 0 1 0 0 2h1z" />
  </svg>
);
export default SvgLtr;
