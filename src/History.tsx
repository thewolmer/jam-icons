import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHistory = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.106 9h3.953c.546 0 .988.448.988 1s-.442 1-.988 1h-4.941a.994.994 0 0 1-.988-1V4c0-.552.442-1 .988-1s.988.448.988 1zm6-6.071A10.03 10.03 0 0 1 22 10c0 5.523-4.424 10-9.882 10v-2c4.366 0 7.906-3.582 7.906-8a8.02 8.02 0 0 0-2.316-5.657A7.83 7.83 0 0 0 12.118 2C8.574 2 5.574 4.36 4.571 7.612l1.352-.923a.98.98 0 0 1 1.372.27 1.007 1.007 0 0 1-.267 1.388l-3.277 2.237a.98.98 0 0 1-1.372-.27L.17 6.998a1.007 1.007 0 0 1 .267-1.389.98.98 0 0 1 1.372.27l.839 1.259C3.863 3.01 7.643 0 12.118 0c2.729 0 5.2 1.12 6.988 2.929" />
  </svg>
);
export default SvgHistory;