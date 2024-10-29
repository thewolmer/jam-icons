import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCameraVintage = ({
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
    <path d="M4 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm9.698.473 1.888-1.887A2 2 0 0 1 17 9h.586a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H17a2 2 0 0 1-1.414-.586l-1.888-1.887A4 4 0 0 1 10 19H4a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 3.698 2.473M17 17h.586v-6H17l-3 3zM9.259 2.379a4.5 4.5 0 1 1-.386 5.785 5 5 0 1 1 .386-5.785M5 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
  </svg>
);
export default SvgVideoCameraVintage;