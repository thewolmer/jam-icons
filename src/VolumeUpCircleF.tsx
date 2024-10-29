import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeUpCircleF = ({
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m-4.88-6.744h1.005l1.824 1.709a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.542L6.125 6.756H5.121a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.877-5.231a1.97 1.97 0 0 1 1.972 1.971v.04a1.97 1.97 0 0 1-1.972 1.972 1 1 0 0 0 0 2 3.97 3.97 0 0 0 3.972-3.972v-.04a3.97 3.97 0 0 0-3.972-3.971 1 1 0 0 0 0 2M13 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6.084-.244 2.205-2.067v6.634l-2.205-2.067H5.121v-2.5z" />
  </svg>
);
export default SvgVolumeUpCircleF;