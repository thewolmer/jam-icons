import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWifi = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 13.992a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7.894 11.44a1 1 0 0 1-1.788-.894 4.355 4.355 0 0 1 7.788 0 1 1 0 1 1-1.788.894 2.353 2.353 0 0 0-4.212 0M4.8 8.595a1 1 0 0 1-1.6-1.2 8.503 8.503 0 0 1 13.6 0 .999.999 0 1 1-1.6 1.2 6.503 6.503 0 0 0-10.4 0m-3.057-2.93A1 1 0 0 1 .257 4.329c4.843-5.377 13.13-5.813 18.512-.973q.513.461.974.973a.999.999 0 1 1-1.486 1.338 11 11 0 0 0-.826-.826C12.871.74 5.847 1.108 1.743 5.666z" />
  </svg>
);
export default SvgWifi;
