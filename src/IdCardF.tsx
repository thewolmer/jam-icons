import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIdCardF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 0h16c1.105 0 2 .831 2 1.857v9.286C20 12.169 19.105 13 18 13H2c-1.105 0-2-.831-2-1.857V1.857C0 .831.895 0 2 0m9 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM3 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgIdCardF;
