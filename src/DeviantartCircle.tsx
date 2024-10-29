import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeviantartCircle = ({
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M13.254 5.01h-2.072l-.854 1.608a.6.6 0 0 1-.534.317H6.77v2.553h1.637c.182 0 .299.187.215.344L6.77 13.32v1.69h2.069l.853-1.607a.6.6 0 0 1 .534-.316h3.03v-2.554h-1.642a.236.236 0 0 1-.215-.344l1.856-3.495V5.011z" />
  </svg>
);
export default SvgDeviantartCircle;