import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGamepadRetro = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0zM6 0h12a6 6 0 1 1-4.472 10h-3.056A6 6 0 1 1 6 0m0 2a4 4 0 1 0 2.982 6.666L9.578 8h4.844l.596.666A4 4 0 1 0 18 2zm12 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgGamepadRetro;
