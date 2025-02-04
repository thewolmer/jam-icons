import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCutleryF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m11.955 10.5-8.298 8.3a2 2 0 1 1-2.829-2.828l8.299-8.299c-.173-1.518.515-3.343 1.954-4.783C13.23.741 16.237.266 17.8 1.83c1.562 1.562 1.087 4.57-1.06 6.717-1.44 1.44-3.266 2.128-4.784 1.955z" />
  </svg>
);
export default SvgCutleryF;
