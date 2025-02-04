import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrop = ({
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
    <path d="M15 17H7a4 4 0 0 1-4-4V5H1a1 1 0 1 1 0-2h2v-4 2a1 1 0 1 1 2 0v2h8a4 4 0 0 1 4 4v8h2a1 1 0 0 1 0 2h-2v4-2a1 1 0 0 1-2 0zm0-2V7a2 2 0 0 0-2-2H5v8a2 2 0 0 0 2 2z" />
  </svg>
);
export default SvgCrop;
