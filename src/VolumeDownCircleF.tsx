import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeDownCircleF = ({
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m-3.962-6.77h1.005l1.823 1.71a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.541l-1.823 1.71H6.038a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.664-4.24a1 1 0 0 1 0 2 1 1 0 1 0 0 2 3 3 0 0 0 0-6 1 1 0 1 0 0 2m-5.869-.26 2.205-2.066v6.633L7.833 11.23H6.038v-2.5z" />
  </svg>
);
export default SvgVolumeDownCircleF;
