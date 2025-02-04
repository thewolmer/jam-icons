import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFeather = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.89 10.808 3.616-3.616a3 3 0 0 0-4.243-4.242L11.77 4.444l.598 2.23.896-.896a1 1 0 1 1 1.415 1.414L11.66 10.21zm-1.633 1.633-2.23-.598-2.74 2.74 2.66.169zm-2.12-6.364L5.71 10.502l.163 2.665 4.86-4.86-.598-2.23zM5.403 16.466 1.95 19.92a1 1 0 0 1-1.414-1.414l3.45-3.45-.326-5.331 8.19-8.19a5 5 0 1 1 7.07 7.072l-8.198 8.198-5.318-.34z" />
  </svg>
);
export default SvgFeather;
