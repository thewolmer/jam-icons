import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTube = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-9 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 7a1 1 0 1 1 0 2v2a1 1 0 0 1 0 2v4a1 1 0 0 0 2 0V2H2zM0 0h6v17a3 3 0 0 1-6 0z" />
  </svg>
);
export default SvgTube;
