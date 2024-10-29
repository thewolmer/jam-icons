import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDicesF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11 0a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm-1 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4.513 8.993a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </svg>
);
export default SvgDicesF;
