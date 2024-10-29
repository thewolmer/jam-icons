import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCameraAlt = ({
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
    <path d="M18 12V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4H2v-2zM6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m0 15h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m4-4a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgCameraAlt;
