import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowsH = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.423 4.996h13.154L14.04 2.46a1 1 0 1 1 1.415-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.242a1 1 0 0 1-1.415-1.414l2.536-2.535H3.423L5.96 9.53a1 1 0 1 1-1.415 1.414L.302 6.703a.997.997 0 0 1 0-1.414l4.242-4.243A1 1 0 1 1 5.96 2.46z" />
  </svg>
);
export default SvgArrowsH;
