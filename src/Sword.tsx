import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSword = ({
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
    <path d="m6.778 10.728 1.414 1.414 8.436-8.435-.236-1.179-1.178-.236zM3.95 16.385a1 1 0 0 1-1.414 1.414L1.12 16.385a1 1 0 0 1 1.415-1.414l2.828-2.829-1.414-1.414a1 1 0 0 1 1.414-1.414L14.556.12l3.536.707.707 3.536-9.192 9.192a1 1 0 1 1-1.415 1.415l-1.414-1.415-2.828 2.829z" />
  </svg>
);
export default SvgSword;
