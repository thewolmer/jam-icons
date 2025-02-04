import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMountainF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.797 10.402c-2.038-.98-5.317-1.604-8.3-1.604-1.828 0-2.951-3.163-3.264-5.235l1.182-2.007a3 3 0 0 1 5.17 0zm1.673 2.839.14.236A3 3 0 0 1 17.024 18H2.975A3 3 0 0 1 .39 13.477l4.517-7.664c.417 2.76 2.144 4.985 4.59 4.985 2.747 0 6.71.536 9.973 2.443" />
  </svg>
);
export default SvgMountainF;
