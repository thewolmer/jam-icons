import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPictureF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m20 10.536-4.416-4.44a3 3 0 0 0-4.69.582L5.072 16H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-.011 2.724A3 3 0 0 1 17 16H7.64l4.969-8.293a1 1 0 0 1 1.563-.195zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);
export default SvgPictureF;
