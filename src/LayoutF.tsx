import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayoutF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 20V8h9v9a3 3 0 0 1-3 3zm-2 0H3a3 3 0 0 1-3-3V8h7zM18 6H0V3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
  </svg>
);
export default SvgLayoutF;
