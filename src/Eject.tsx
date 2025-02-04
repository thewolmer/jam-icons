import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEject = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.31 6.51c.843.728.925 1.988.182 2.814a2.05 2.05 0 0 1-1.526.676H2.034C.911 10 0 9.107 0 8.006c0-.573.251-1.118.69-1.496L7.656.498a2.065 2.065 0 0 1 2.688 0zM2.034 8.006h13.932L9 1.994zM18 14v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 0H2v2h14z" />
  </svg>
);
export default SvgEject;
