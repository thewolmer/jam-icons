import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuote = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5 0a1 1 0 1 1 0 2c-.893 0-1.695.39-2.245 1.01A3 3 0 1 1 0 6V5a5 5 0 0 1 5-5m8 0a1 1 0 0 1 0 2c-.893 0-1.695.39-2.245 1.01A3 3 0 1 1 8 6V5a5 5 0 0 1 5-5M3 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </svg>
);
export default SvgQuote;
