import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRepeat = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m11.774 15 1.176 1.176a1 1 0 0 1-1.414 1.414l-2.829-2.828a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L11.883 13H14a4 4 0 1 0 0-8 1 1 0 0 1 0-2 6 6 0 1 1 0 12zM8.273 3 7.176 1.904A1 1 0 0 1 8.591.489l2.828 2.829a1 1 0 0 1 0 1.414L8.591 7.56a1 1 0 0 1-1.415-1.414L8.323 5H6a4 4 0 1 0 0 8 1 1 0 0 1 0 2A6 6 0 1 1 6 3z" />
  </svg>
);
export default SvgRepeat;
