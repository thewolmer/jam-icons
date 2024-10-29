import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyedropperF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.473 11.693-1.36 1.36-8.417-.068L9.23 7.451a1 1 0 1 1 1.415-1.414l4.242-4.243a3 3 0 1 1 4.243 4.243l-4.243 4.242a1 1 0 0 1-1.414 1.414m-3.191 3.192L7.57 17.596a7 7 0 0 1-2.736 1.691l-2.899.966A1 1 0 0 1 .67 18.988l.967-2.899a7 7 0 0 1 .522-1.186z" />
  </svg>
);
export default SvgEyedropperF;