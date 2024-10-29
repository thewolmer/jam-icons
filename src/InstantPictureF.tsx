import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstantPictureF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16 11.252-1.454-2.24a3 3 0 0 0-5-.304L5.575 14H0V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM8.076 14l3.07-4.092a1 1 0 0 1 1.666.101L15.284 14zM16 16v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);
export default SvgInstantPictureF;
