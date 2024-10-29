import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBathtub = ({
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
    <path d="M8.487 2.04A3 3 0 0 1 11 5v2H5V5c0-1.039.528-1.955 1.33-2.493A2 2 0 0 0 3 4v6h16a1 1 0 0 1 0 2v1a6 6 0 0 1-4 5.659V19a1 1 0 0 1-2 0H7a1 1 0 0 1-2 0v-.341A6 6 0 0 1 1 13v-1a1 1 0 0 1 0-2V4a4 4 0 0 1 7.487-1.96M17 12H3v1a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4zM8 4a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgBathtub;