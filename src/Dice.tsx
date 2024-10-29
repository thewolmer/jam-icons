import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDice = ({
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
    <path d="M16 0a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2H4a2 2 0 0 0-1.995 1.85L2 4v12a2 2 0 0 0 1.85 1.995L4 18h12a2 2 0 0 0 1.995-1.85L18 16V4a2 2 0 0 0-1.85-1.995zm-1 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-5-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
  </svg>
);
export default SvgDice;