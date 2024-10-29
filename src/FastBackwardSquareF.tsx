import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFastBackwardSquareF = ({
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
    <path d="m6.08 11.6 2.543 2.763a1.9 1.9 0 0 0 2.829.011c.207-.222.365-.488.465-.778l.706.767a1.9 1.9 0 0 0 2.829.011c.378-.405.59-.955.59-1.53V7.156c0-1.19-.895-2.156-2-2.156-.546 0-1.069.241-1.446.667l-.671.758C11.647 5.595 10.909 5 10.043 5c-.547 0-1.07.241-1.447.667L6.08 8.51V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.043 12.844-2.141-2.326.004-.948 2.137-2.414zm-4 0-2.567-2.788 2.567-2.9z" />
  </svg>
);
export default SvgFastBackwardSquareF;
