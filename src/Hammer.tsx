import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHammer = ({
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
    <path d="m2.536 8.9 2.828 2.828 6.364-6.364-2.829-2.828zm12.727 5.656-4.95-4.95-.706.708 4.95 4.95zm1.415 1.415-.707.707 1.767 1.767a.5.5 0 0 0 .707-.707zM6.01 2.596 7.485 1.12a2 2 0 0 1 2.829 0l2.828 2.829a2 2 0 0 1 0 2.828l-1.414 1.414 8.132 8.132a2.5 2.5 0 1 1-3.536 3.536l-8.132-8.132-1.414 1.414a2 2 0 0 1-2.828 0l-2.83-2.827a2 2 0 0 1 0-2.829l1.475-1.474a1.5 1.5 0 0 1 .293-1.708L4.303 2.89a1.5 1.5 0 0 1 1.708-.293z" />
  </svg>
);
export default SvgHammer;
