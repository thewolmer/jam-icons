import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWrenchF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m18.477 13.84-4.243 4.243L8.01 11.86a6.002 6.002 0 0 1-6.445-9.273L5.1 6.12a1 1 0 0 0 1.415-1.414L2.979 1.17a6.002 6.002 0 0 1 9.273 6.445zm1.414 1.415.707.707a3 3 0 0 1-4.243 4.243l-.707-.708z" />
  </svg>
);
export default SvgWrenchF;