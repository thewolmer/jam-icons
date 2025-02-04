import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYoutubeCircle = ({
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M12.923 6.526H7.077C5.93 6.526 5 7.446 5 8.58v2.89c0 1.135.93 2.054 2.077 2.054h5.846c1.147 0 2.077-.92 2.077-2.054V8.58c0-1.135-.93-2.054-2.077-2.054m-1.404 3.64-2.735 1.29a.11.11 0 0 1-.157-.099v-2.66a.11.11 0 0 1 .16-.097l2.734 1.37a.11.11 0 0 1-.002.196" />
  </svg>
);
export default SvgYoutubeCircle;
