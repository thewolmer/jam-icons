import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHammerF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.288 5.703a1.5 1.5 0 0 1 .293-1.707L3.996 2.58a1.5 1.5 0 0 1 1.707-.293L7.178.814a2 2 0 0 1 2.828 0l2.829 2.828a2 2 0 0 1 0 2.829L6.47 12.835a2 2 0 0 1-2.829 0L.814 10.006a2 2 0 0 1 0-2.828zM9.3 12.835l3.536-3.536 3.535 3.536-3.535 3.535zm4.95 4.95 3.535-3.536 1.768 1.768a2.5 2.5 0 0 1-3.535 3.535l-1.768-1.768z" />
  </svg>
);
export default SvgHammerF;
