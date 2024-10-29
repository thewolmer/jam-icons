import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInboxF = ({
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
    <path d="M20 5H0l4-5h12zm0 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7h6.126a4.002 4.002 0 0 0 7.748 0zM8.265 7h3.465a2 2 0 0 1-3.465 0" />
  </svg>
);
export default SvgInboxF;
