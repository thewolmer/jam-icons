import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScissors = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.107 10.554 7.363 12.63a3.99 3.99 0 0 1-.192 4.89 4.004 4.004 0 0 1-5.635.492 3.99 3.99 0 0 1-.493-5.628 4.005 4.005 0 0 1 4.788-1.038L7.801 9 2.413 2.587a1 1 0 0 1 .123-1.407 1 1 0 0 1 1.409.123l5.162 6.144 5.161-6.144a1 1 0 0 1 1.41-.123 1 1 0 0 1 .123 1.407L10.412 9l1.97 2.345a4.005 4.005 0 0 1 4.788 1.038 3.99 3.99 0 0 1-.493 5.628 4.004 4.004 0 0 1-5.635-.492 3.99 3.99 0 0 1-.192-4.89zm-6.285 5.927a2 2 0 0 0 2.571-3.06 2 2 0 0 0-2.818.246c-.71.845-.6 2.105.247 2.814m12.57 0a1.996 1.996 0 0 0 .246-2.814 2 2 0 0 0-2.817-.246 1.996 1.996 0 0 0-.247 2.814c.71.845 1.972.955 2.818.246" />
  </svg>
);
export default SvgScissors;
