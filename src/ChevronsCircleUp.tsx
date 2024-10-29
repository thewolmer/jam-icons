import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronsCircleUp = ({
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
    <path d="M10 7.382 7.879 9.503A1 1 0 1 1 6.464 8.09l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1-1.415 1.414L10 7.383z" />
    <path d="m10 12.382-2.121 2.121a1 1 0 1 1-1.415-1.414l2.829-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1-1.415 1.414z" />
  </svg>
);
export default SvgChevronsCircleUp;
