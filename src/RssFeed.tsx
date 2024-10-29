import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRssFeed = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.996 15.97a1.996 1.996 0 1 1 0-3.992 1.996 1.996 0 0 1 0 3.992M1.12 7.977a.998.998 0 0 1-.247-1.98 8.103 8.103 0 0 1 9.108 8.04v.935a.998.998 0 1 1-1.996 0v-.934a6.108 6.108 0 0 0-6.865-6.06zM0 1.065A1 1 0 0 1 .93.002C8.717-.517 15.448 5.374 15.967 13.16q.063.94 0 1.88a.998.998 0 1 1-1.992-.133q.054-.808 0-1.614C13.53 6.607 7.75 1.548 1.065 1.994A1 1 0 0 1 0 1.064z" />
  </svg>
);
export default SvgRssFeed;