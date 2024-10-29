import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBirthdayCakeF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m20 15.693-5.141 1.282-4.82-.996-4.935.996L0 15.687V15a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm0 2.063V22H0v-4.25l5.057 1.275 4.978-1.004 4.859 1.004zM7 9h6v2H7zm3-.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3" />
  </svg>
);
export default SvgBirthdayCakeF;
