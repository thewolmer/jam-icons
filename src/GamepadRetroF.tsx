import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGamepadRetroF = ({
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
    <path d="M7 5V4a1 1 0 1 0-2 0v1H4a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2zM6 0h12a6 6 0 1 1-4.472 10h-3.056A6 6 0 1 1 6 0m12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgGamepadRetroF;
