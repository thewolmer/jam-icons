import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeleteF = ({
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
    <path d="m14.414 7 1.414-1.414a1 1 0 0 0-1.414-1.414L13 5.586l-1.414-1.414a1 1 0 1 0-1.414 1.414L11.586 7l-1.414 1.414a1 1 0 1 0 1.414 1.414L13 8.414l1.414 1.414a1 1 0 1 0 1.414-1.414zM7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0" />
  </svg>
);
export default SvgDeleteF;