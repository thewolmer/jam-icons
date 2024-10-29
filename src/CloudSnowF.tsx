import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudSnowF = ({
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
    <path d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0M6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
);
export default SvgCloudSnowF;
