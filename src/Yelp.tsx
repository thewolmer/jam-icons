import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYelp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.893 14.08 3.13 17.444a.903.903 0 0 0 .367 1.413l2.701 1.063a.903.903 0 0 0 1.233-.816l.117-4.407c.023-.889-1.09-1.304-1.655-.617m-.459-3.345L1.336 9.264a.903.903 0 0 0-1.207.82l-.093 2.902a.903.903 0 0 0 1.183.886l4.19-1.372c.845-.276.861-1.465.025-1.765m4.696.472 4.198-1.157a.903.903 0 0 0 .514-1.366l-1.595-2.426a.903.903 0 0 0-1.477-.043L9.134 9.749c-.531.713.14 1.694.996 1.458M7.09 1.12A1.07 1.07 0 0 0 5.74.04L2.416.946a1.07 1.07 0 0 0-.592 1.65l3.813 6.606q.045.082.105.153c.565.663 1.625.418 1.886-.36.047-.139.06-.287.048-.434l-.585-7.44zm7.266 13.106-4.215-1.294c-.85-.26-1.548.701-1.038 1.429l2.5 3.564a.903.903 0 0 0 1.46.025l1.749-2.317a.903.903 0 0 0-.456-1.407" />
  </svg>
);
export default SvgYelp;