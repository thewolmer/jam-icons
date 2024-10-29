import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInboxes = ({
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
    <path d="M2 4.961V18h16V4.961L14.298 2H5.702zM0 4l5-4h10l5 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13.874 2a4.002 4.002 0 0 1-7.748 0H2V4h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0m2.142 7a4.002 4.002 0 0 1-7.748 0H2v-2h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0" />
  </svg>
);
export default SvgInboxes;
