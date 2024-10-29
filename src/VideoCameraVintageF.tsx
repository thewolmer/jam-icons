import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCameraVintageF = ({
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
    <path d="M9.671 9c-.3-.243-.57-.525-.799-.837A5 5 0 0 1 8 9zm2.972.998c.456.401.82.905 1.055 1.475l1.888-1.887A2 2 0 0 1 17 9h.586a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H17a2 2 0 0 1-1.414-.586l-1.888-1.887A4 4 0 0 1 10 19H4a4 4 0 0 1-4-4v-2a4 4 0 0 1 2.46-3.693 5 5 0 1 1 6.799-6.929 4.5 4.5 0 1 1 3.385 7.62zM5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
  </svg>
);
export default SvgVideoCameraVintageF;
