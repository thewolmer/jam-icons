import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMask = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 1.02Q12.64 0 14.5 0a5.5 5.5 0 0 1 0 11q-1.86 0-4.5-1.057Q7.36 11 5.5 11a5.5 5.5 0 0 1 0-11Q7.36 0 10 1.02m.721 1.866L10 3.164l-.721-.278C7.731 2.288 6.463 2 5.5 2a3.5 3.5 0 0 0 0 7c.953 0 2.215-.296 3.757-.913L10 7.789l.743.298C12.285 8.704 13.547 9 14.5 9a3.5 3.5 0 0 0 0-7c-.963 0-2.231.288-3.779.886M6 7c-1.105 0-2-.672-2-1.5S4.895 4 6 4s2 .672 2 1.5S7.105 7 6 7m8 0c-1.105 0-2-.672-2-1.5S12.895 4 14 4s2 .672 2 1.5S15.105 7 14 7" />
  </svg>
);
export default SvgMask;