import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLuggageF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 4v12H7V4zm2 0a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5zM5 4v12a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5m.1 0a5.002 5.002 0 0 1 9.8 0h-2.07a3.001 3.001 0 0 0-5.66 0z" />
  </svg>
);
export default SvgLuggageF;
