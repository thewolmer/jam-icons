import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNpm = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -8 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 0h20v6.857H10V8H5.556V6.857H0zm1.111 5.714h2.222V2.286h1.111v3.428h1.112V1.143H1.11zm5.556-4.571v5.714h2.222V5.714h2.222V1.143zm5.555 0v4.571h2.222V2.286h1.112v3.428h1.11V2.286h1.112v3.428h1.11V1.143z" />
    <path d="M10 4.7H9V2.2h1z" />
  </svg>
);
export default SvgNpm;
