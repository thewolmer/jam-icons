import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 8v9h6V8zm8 11H0v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2V8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM8 17v-3H4v-2H2v5zM8 2v4h10V2h-2v2h-6V2zm5 11a2 2 0 0 1 2 2v3h-4v-3a2 2 0 0 1 2-2m-1-4h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2" />
  </svg>
);
export default SvgCastle;
