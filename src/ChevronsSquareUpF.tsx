import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronsSquareUpF = ({
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
    <path d="m10 12.382 2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0l-2.829 2.828a1 1 0 0 0 1.415 1.414zm0-5 2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0L6.464 8.089A1 1 0 1 0 7.88 9.503L10 7.383zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgChevronsSquareUpF;
