import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackwardSquare = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.973 4.754 1.956-1.398c.905-.646 2.13-.389 2.737.576.218.346.334.753.334 1.17v5.796c0 1.16-.883 2.102-1.972 2.102a1.9 1.9 0 0 1-1.099-.356l-1.956-1.398C10.818 14.24 10.006 15 9.028 15a1.9 1.9 0 0 1-1.099-.356l-4.055-2.898c-.905-.647-1.146-1.952-.54-2.917.143-.227.327-.422.54-.575L7.93 5.356c.905-.646 2.13-.389 2.737.576.157.249.26.53.307.822zm-1.945 6.144V7.102L4.973 10zm5 0V7.102l-3.02 2.159-.004 1.476z" />
  </svg>
);
export default SvgBackwardSquare;
