import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAccessibility = ({
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
    <path d="m5.9 10.016-.324 3.087a1 1 0 1 1-1.989-.21L4.31 6.01H1a1 1 0 0 1 0-2.003h10a1 1 0 0 1 0 2.003H7.69l.723 6.885a1.001 1.001 0 1 1-1.99.209L6.1 10.016zm.1-6.01c-1.105 0-2-.897-2-2.003S4.895 0 6 0s2 .897 2 2.003a2 2 0 0 1-2 2.003" />
  </svg>
);
export default SvgAccessibility;
