import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForwardCircle = ({
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-.973-4.754-1.956 1.398c-.905.646-2.13.389-2.737-.576A2.2 2.2 0 0 1 4 12.898V7.102C4 5.942 4.883 5 5.972 5c.391 0 .774.124 1.099.356l1.956 1.398C9.182 5.76 9.994 5 10.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2 2 0 0 1-.54.575l-4.055 2.898c-.905.646-2.13.389-2.737-.576a2.2 2.2 0 0 1-.307-.822m1.945-6.144v5.796L15.027 10zm-5 0v5.796l3.02-2.159.004-1.476z" />
  </svg>
);
export default SvgForwardCircle;
