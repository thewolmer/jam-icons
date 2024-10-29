import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.348 12h7.304l-2.57-4.774L9.54 7.12 7 2.887 4.461 7.12l1.46.104zm7.958-3.003 1.9 3.529a1 1 0 0 1-.88 1.474H8v5a1 1 0 0 1-2 0v-5H1.674a1 1 0 0 1-.88-1.474l1.9-3.529-.72-.387a1 1 0 0 1-.065-1.124L6.143.429a1 1 0 0 1 1.714 0l4.234 7.057a1 1 0 0 1-.064 1.123z" />
  </svg>
);
export default SvgTreeAlt;
