import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTags = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.586 15.071 13 13.657l1.414 1.414 6.165-6.165 1.09-3.552-2.484-2.483-1.079.336-1.598-1.598L18.591.96a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2L22.345 9.97l-7.93 7.93-2.83-2.828zM14.236.75l2.482 2.483a2 2 0 0 1 .498 2l-1.235 4.028-7.93 7.931-7.78-7.778L8.17 1.516 12.227.254a2 2 0 0 1 2.008.496zM3.1 9.414l4.95 4.95 6.164-6.165 1.09-3.552-2.484-2.483-3.585 1.115zm7.424-2.475a1.5 1.5 0 1 1 2.121-2.121 1.5 1.5 0 0 1-2.12 2.121zm6.886 1.022.782-2.878q.674.228.917.518a1.5 1.5 0 0 1-.185 2.113q-.435.366-1.514.247" />
  </svg>
);
export default SvgTags;
