import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrainF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 2a2 2 0 0 0-2 2v5.038l12-.023V4a2 2 0 0 0-2-2zm7.667 15L11 16H5l-.667 1H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4zM4 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-11a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M4.314 17.029l7.371-.001.279.417A1 1 0 0 1 11.13 19H4.87a1 1 0 0 1-.833-1.555z" />
  </svg>
);
export default SvgTrainF;
