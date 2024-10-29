import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlueF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 9H2V7.393a1 1 0 0 1 1-1h1v-5a1 1 0 1 1 2 0v5h1a1 1 0 0 1 1 1zm.809 1A3 3 0 0 1 10 12.393v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7c0-.977.467-1.845 1.191-2.393z" />
  </svg>
);
export default SvgGlueF;