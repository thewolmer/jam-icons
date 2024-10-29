import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlugF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 7.565h8a2 2 0 0 1 2 2v3.5a5.5 5.5 0 0 1-4.155 5.334A1.5 1.5 0 0 1 6.5 20.565h-1a1.5 1.5 0 0 1-1.345-2.166A5.5 5.5 0 0 1 0 13.065v-3.5a2 2 0 0 1 2-2m2-1H2v-5a1 1 0 1 1 2 0zm6 0H8v-5a1 1 0 1 1 2 0z" />
  </svg>
);
export default SvgPlugF;
