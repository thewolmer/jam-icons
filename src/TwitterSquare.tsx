import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterSquare = ({
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
    <path d="M15 6.947c-.368.16-.763.27-1.178.318.424-.25.748-.646.902-1.117a4.2 4.2 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02q0 .237.053.46a5.85 5.85 0 0 1-4.228-2.11 2 2 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.1 2.1 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98 2.1 2.1 0 0 1-.927.034 2.05 2.05 0 0 0 1.916 1.403 4.16 4.16 0 0 1-2.548.864q-.248 0-.489-.028A5.86 5.86 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.1 4.1 0 0 0 15 6.947" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgTwitterSquare;
