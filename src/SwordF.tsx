import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSwordF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.646 14.096a1 1 0 1 1-1.414 1.414l-1.414-1.414-2.828 2.829a1 1 0 0 1-1.415 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.415l2.829-2.828-1.414-1.414a1 1 0 0 1 1.414-1.414zm.708-.707L6.11 9.146 14.596.661l3.536.707.707 3.536z" />
  </svg>
);
export default SvgSwordF;
