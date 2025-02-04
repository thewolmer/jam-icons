import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMerge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 5.83a3.001 3.001 0 1 1 2.033-.013v2.028q0 .111-.008.221a1 1 0 0 0 .462.637l3.086 1.846a3 3 0 0 1 1.46 2.575v1.059a3.001 3.001 0 1 1-2-.024v-1.035a1 1 0 0 0-.487-.858L8.46 10.42a3 3 0 0 1-.444-.324 3 3 0 0 1-.443.324l-3.086 1.846a1 1 0 0 0-.487.858v1.047a3.001 3.001 0 1 1-2 0v-1.047a3 3 0 0 1 1.46-2.575l3.086-1.846a1 1 0 0 0 .462-.637A3 3 0 0 1 7 7.845V5.829zM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgMerge;
