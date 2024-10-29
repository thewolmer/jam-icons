import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBathtubF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.487 2.897A3 3 0 0 1 11 5.857v2H5v-2c0-1.038.528-1.954 1.33-2.492A2 2 0 0 0 3 4.858v6h16a1 1 0 0 1 0 2v1a6 6 0 0 1-4 5.658V20a1 1 0 1 1-2 0v-.142H7V20a1 1 0 1 1-2 0v-.484a6 6 0 0 1-4-5.658v-1a1 1 0 0 1 0-2v-6a4 4 0 0 1 7.487-1.96z" />
  </svg>
);
export default SvgBathtubF;
