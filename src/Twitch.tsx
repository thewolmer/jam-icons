import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitch = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.25 0 0 3.75V17.5h5V20h2.5l2.5-2.5h3.75l5-5.325V0zM17.5 11.25 14 15H9.568l-2.693 1.959V15H2.5V1.25h15z" />
    <path d="M8.75 5H10v5H8.75zm3.75 0h1.25v5H12.5z" />
  </svg>
);
export default SvgTwitch;
