import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCandle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 11v6h2v-6zm4 6h5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h5V9h6zM2 19v1h16v-1zm8-10.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3m0-1.952c.552 0 1-.48 1-1 0-.466-.333-1.109-1-2-.667.891-1 1.534-1 2 0 .52.448 1 1 1" />
  </svg>
);
export default SvgCandle;
