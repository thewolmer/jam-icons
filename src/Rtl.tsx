import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRtl = ({
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
    <path d="M6.007 2v9a1 1 0 0 1-2.002 0V6H3.004A3 3 0 0 1 0 3c0-1.657 1.345-3 3.004-3h7.008a1 1 0 1 1 0 2h-1v9a1 1 0 0 1-2.003 0V2zm6.284 6.877 1.416 1.414a1 1 0 0 1 0 1.414c-.391.39-1.025.39-1.416 0l-2.124-2.121a1 1 0 0 1 0-1.415l2.124-2.12a1 1 0 0 1 1.416 0 1 1 0 0 1 0 1.413L12.29 8.877ZM4.005 2H3.004a1 1 0 1 0 0 2h1V2Z" />
  </svg>
);
export default SvgRtl;
