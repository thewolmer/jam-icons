import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnion = ({
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
    <path d="M10.858 2.48 10 2.888l-.858-.408a5 5 0 1 0 0 9.04l.858-.408.858.408a5 5 0 1 0 0-9.04M13 0a7 7 0 1 1-3 13.326A7 7 0 1 1 10 .673 7 7 0 0 1 13 0" />
  </svg>
);
export default SvgUnion;
