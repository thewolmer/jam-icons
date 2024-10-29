import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCapsule = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 9V5a3 3 0 1 0-6 0v4zm0 2H2v4a3 3 0 0 0 6 0zM5 0a5 5 0 0 1 5 5v10a5 5 0 0 1-10 0V5a5 5 0 0 1 5-5" />
  </svg>
);
export default SvgCapsule;
