import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGps = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.913 2.9 2.632 9.226l4.829 2.006a5.77 5.77 0 0 1 3.118 3.119l2.006 4.828zm1.847.682-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.92 1.92 0 0 1-1.11-1.067l-2.007-4.83a3.85 3.85 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53" />
  </svg>
);
export default SvgGps;
