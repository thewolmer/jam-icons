import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEggs = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.843 12.37A4 4 0 0 0 18 9c0-1.238-.623-3.136-1.58-4.698C15.513 2.822 14.524 2 14 2s-1.513.822-2.42 2.302a12 12 0 0 0-.935 1.884 12.6 12.6 0 0 0-1.277-2.024C10.522 1.91 12.26 0 14 0c3 0 6 5.686 6 9a6 6 0 0 1-8.943 5.23c.36-.563.63-1.19.786-1.86M6 17a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6m0-2a4 4 0 0 0 4-4c0-1.238-.623-3.136-1.58-4.698C7.513 4.822 6.524 4 6 4s-1.513.822-2.42 2.302C2.623 7.864 2 9.762 2 11a4 4 0 0 0 4 4" />
  </svg>
);
export default SvgEggs;