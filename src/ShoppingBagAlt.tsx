import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShoppingBagAlt = ({
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
    <path d="M2 8v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8zm0-2V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3h2v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6zm2 0h6V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" />
  </svg>
);
export default SvgShoppingBagAlt;
