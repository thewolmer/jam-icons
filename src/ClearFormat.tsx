import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClearFormat = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6.5 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.326 2 3.95 9.309a1 1 0 1 1-1.902-.618L4.223 2H1a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zm3.33 6.243.708.707a1 1 0 1 1-1.414 1.414l-.707-.707-.707.707A1 1 0 0 1 6.12 8.95l.707-.707-.707-.707A1 1 0 0 1 7.536 6.12l.707.707.707-.707a1 1 0 1 1 1.414 1.415z" />
  </svg>
);
export default SvgClearFormat;
