import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDisqus = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.365 18.75a9.76 9.76 0 0 1-6.23-2.224L0 17.067l1.595-3.805a9.1 9.1 0 0 1-.866-3.887C.729 4.196 5.045 0 10.364 0 15.69 0 20 4.196 20 9.375s-4.31 9.375-9.635 9.375m.061-14.375H6.875v10h3.501c3.313 0 5.249-2.144 5.249-5.027V9.32c0-2.882-1.911-4.946-5.199-4.946z" />
    <path d="M13.004 9.381c0 1.62-1.013 2.534-2.54 2.534H9.426V6.828h1.038c1.527 0 2.54.927 2.54 2.527z" />
  </svg>
);
export default SvgDisqus;
