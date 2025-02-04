import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBottleF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.975 9H.025a4 4 0 0 1 .902-2.113l1.11-1.33A2 2 0 0 0 2.5 4.275V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.276a2 2 0 0 0 .464 1.28l1.109 1.331A4 4 0 0 1 9.975 9M10 16v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zm-8-5h6v3H2z" />
  </svg>
);
export default SvgBottleF;
