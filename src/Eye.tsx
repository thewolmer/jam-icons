import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEye = ({
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
    <path d="M18 6c0-1.81-3.76-3.985-8.007-4C5.775 1.985 2 4.178 2 6c0 1.825 3.754 4.006 7.997 4C14.252 9.994 18 7.82 18 6m-8 6c-5.042.007-10-2.686-10-6S4.984-.017 10 0s10 2.686 10 6-4.958 5.993-10 6m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgEye;
