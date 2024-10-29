import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4.5 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 0h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m6-4h6a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M4.44 5.857 2.382 7.091a1 1 0 0 1-1.515-.857V3.766a1 1 0 0 1 1.515-.857l2.056 1.234a1 1 0 0 1 0 1.714z" />
  </svg>
);
export default SvgIndent;
