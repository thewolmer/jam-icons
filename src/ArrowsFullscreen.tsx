import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowsFullscreen = ({
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
    <path d="M19 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.414L11.414 10 18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L10 11.414 3.414 18H7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v3.586L8.586 10 2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3.414L10 8.586 16.586 2H13a1 1 0 0 1 0-2z" />
  </svg>
);
export default SvgArrowsFullscreen;
