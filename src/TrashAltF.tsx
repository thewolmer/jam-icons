import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrashAltF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.778 6-.673 12.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.222 6zM1 0h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m5 8a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgTrashAltF;
