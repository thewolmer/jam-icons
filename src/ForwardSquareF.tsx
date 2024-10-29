import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForwardSquareF = ({
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
    <path d="M9.027 13.246c.046.293.15.573.307.822.607.965 1.832 1.222 2.737.576l4.055-2.898c.213-.153.397-.348.54-.575.606-.965.365-2.27-.54-2.917L12.07 5.356A1.9 1.9 0 0 0 10.972 5c-.978 0-1.79.759-1.945 1.754L7.07 5.356A1.9 1.9 0 0 0 5.972 5C4.883 5 4 5.941 4 7.102v5.796c0 .417.116.824.334 1.17.607.965 1.832 1.222 2.737.576zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m6.972 7.102L15.027 10l-4.055 2.898zm-5 0 3.024 2.161-.003 1.476-3.02 2.159V7.102z" />
  </svg>
);
export default SvgForwardSquareF;
