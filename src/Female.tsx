import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFemale = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10m1 4h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-2q0-.036.002-.07A7.002 7.002 0 0 1 7 0a7 7 0 0 1 .998 13.93L8 14z" />
  </svg>
);
export default SvgFemale;
