import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackwardCircleF = ({
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
    <path d="M10.973 6.754a2.2 2.2 0 0 0-.307-.822c-.607-.965-1.832-1.222-2.737-.576L3.874 8.254a2 2 0 0 0-.54.575c-.606.965-.365 2.27.54 2.917l4.055 2.898A1.9 1.9 0 0 0 9.028 15c.978 0 1.79-.759 1.945-1.754l1.956 1.398a1.9 1.9 0 0 0 1.099.356C15.117 15 16 14.059 16 12.898V7.102c0-.417-.116-.824-.334-1.17-.607-.965-1.832-1.222-2.737-.576zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m4.028-7.102-3.024-2.161.003-1.476 3.02-2.159v5.796zm-5 0L4.973 10l4.055-2.898z" />
  </svg>
);
export default SvgBackwardCircleF;
