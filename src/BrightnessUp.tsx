import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrightnessUp = ({
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
    <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6-5h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1M1 9h3a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m13.95 4.536 2.121 2.12a1 1 0 0 1-1.414 1.415l-2.121-2.121a1 1 0 0 1 1.414-1.414m-8.486 0a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 1 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.414 0M17.071 2.929a1 1 0 0 1 0 1.414L14.95 6.464a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0m-12.728 0L6.464 5.05A1 1 0 1 1 5.05 6.464l-2.12-2.12a1 1 0 0 1 1.414-1.415z" />
  </svg>
);
export default SvgBrightnessUp;