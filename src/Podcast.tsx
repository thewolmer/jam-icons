import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPodcast = ({
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
    <path d="M8 19.8c-4.564-.927-8-4.962-8-9.8C0 4.477 4.477 0 10 0s10 4.477 10 10c0 4.838-3.436 8.873-8 9.8v-2.052a8 8 0 1 0-4 0zm0-4.141a6 6 0 1 1 4 0v-2.194a4 4 0 1 0-4 0zm3-3.927V20H9v-8.268a2 2 0 1 1 2 0" />
  </svg>
);
export default SvgPodcast;
