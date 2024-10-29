import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchiveF = ({
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
    <path d="M17 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm1 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7zM8 14a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgArchiveF;
