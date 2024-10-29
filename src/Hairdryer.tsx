import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHairdryer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 8.286h4.017l.584.571a4 4 0 0 0 1.991 1.062l1.096.224 2.364 6.495a1 1 0 1 0 1.88-.684l-2.333-6.407.793-.892A4 4 0 0 0 10.6 3.143l-.584.571H6zm-2 0V3.714H2v4.572zm5.2 2H2a2 2 0 0 1-2-2V3.714a2 2 0 0 1 2-2h7.2a6 6 0 0 1 8.686 8.27l1.925 5.286a3 3 0 1 1-5.638 2.052l-1.982-5.444a6 6 0 0 1-2.99-1.592zM12 5h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2" />
  </svg>
);
export default SvgHairdryer;
