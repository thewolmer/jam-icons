import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitlab = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.006 18.443 6.326 7.118h7.36zm0 0L1.168 7.118h5.158zM1.168 7.118l8.838 11.325-9.68-7.032a.76.76 0 0 1-.276-.852zm0 0L3.385.296a.38.38 0 0 1 .724 0l2.217 6.822zm8.838 11.325 3.68-11.325h5.157zm8.837-11.325 1.119 3.441a.76.76 0 0 1-.277.852l-9.68 7.032zm0 0h-5.157L15.902.296a.38.38 0 0 1 .725 0z" />
  </svg>
);
export default SvgGitlab;
