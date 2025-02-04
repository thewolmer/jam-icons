import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 1h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2v7a1 1 0 0 1-2 0V1a1 1 0 1 1 2 0m0 9h12V3H2z" />
  </svg>
);
export default SvgFlag;
