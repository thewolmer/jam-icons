import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShoppingBag = ({
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
    <path d="M3 10a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 0 0-1-1zm2-2V5a5 5 0 1 1 10 0v3h2a3 3 0 0 1 3 3v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-3a3 3 0 0 1 3-3zm2 0h6V5a3 3 0 0 0-6 0z" />
  </svg>
);
export default SvgShoppingBag;
