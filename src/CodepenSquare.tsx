import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCodepenSquare = ({
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
    <path d="M10.402 5.131a.79.79 0 0 0-.887.01L5.54 7.91a.79.79 0 0 0-.339.648v2.982a.79.79 0 0 0 .355.659l4.039 2.67a.79.79 0 0 0 .87 0l4.12-2.722a.79.79 0 0 0 .354-.658v-2.93a.79.79 0 0 0-.354-.66l-4.184-2.768zm3.077 3.23-1.523 1.023-1.428-1.038-.009-2.043zM9.486 6.306v1.999L8.023 9.327l-1.46-.979zM6.164 9.333l.944.633-.944.661zm3.347 4.261-2.947-1.976 1.472-1.029 1.475.99zm-.56-3.644.955-.667 1.11.73-.984.662zm1.601 3.644v-2.016l1.41-.944 1.517.997zm3.347-2.933-1-.657 1-.671z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgCodepenSquare;
