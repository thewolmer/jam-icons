import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlashlightOff = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-0.5 -0.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.31 5.825 3.865 3.865c.334-.09.642-.265.896-.518l2.121-2.122-4.242-4.242-2.122 2.12a2 2 0 0 0-.518.897m1.933 4.76-2.829-2.828-9.192 9.193a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l9.193-9.192zm-2.829-7.07 2.122-2.122a2 2 0 0 1 2.828 0l4.243 4.243a2 2 0 0 1 0 2.828l-2.122 2.122a3.99 3.99 0 0 1-2.578 1.164l-9.443 9.442a3 3 0 0 1-4.242 0l-1.414-1.414a3 3 0 0 1 0-4.242l9.442-9.443a3.99 3.99 0 0 1 1.164-2.578m-2.121 9.192a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414 0" />
  </svg>
);
export default SvgFlashlightOff;
