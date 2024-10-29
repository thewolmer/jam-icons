import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPocketWatchF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 13v-3a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zM5 5.732V5a1 1 0 1 1 2 0v.732a2 2 0 1 0-2 0M6 20A6 6 0 1 1 6 8a6 6 0 0 1 0 12M2.959 6.598a4 4 0 1 1 6.082 0A8 8 0 0 0 6 6a8 8 0 0 0-3.041.598" />
  </svg>
);
export default SvgPocketWatchF;