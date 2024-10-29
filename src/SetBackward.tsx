import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSetBackward = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.18 8.477a.976.976 0 0 0 .324 1.363l9.922 6.032c.16.097.346.149.535.149.56 0 1.013-.443 1.013-.99V2.97a.97.97 0 0 0-.153-.523 1.027 1.027 0 0 0-1.395-.317L6.504 8.16c-.131.08-.243.189-.325.317zM6 6.136 15.355.449c1.425-.867 3.3-.44 4.186.951.3.471.459 1.014.459 1.569V15.03c0 1.641-1.36 2.97-3.04 2.97a3.1 3.1 0 0 1-1.605-.448L6 11.865V16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM2 2v14h2V2z" />
  </svg>
);
export default SvgSetBackward;