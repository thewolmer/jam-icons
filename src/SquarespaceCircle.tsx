import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSquarespaceCircle = ({
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M5.987 9.513 9.591 5.89a2.307 2.307 0 0 1 3.275 0 .593.593 0 0 1-.017.82.577.577 0 0 1-.819 0l-.054-.063a1.153 1.153 0 0 0-1.567.066l-3.684 3.704a.6.6 0 0 1-.835-.002.584.584 0 0 1 .097-.902m8.09.079a.577.577 0 0 0-.897.098l-3.59 3.608a1.154 1.154 0 0 1-1.637 0l-.016-.003a.577.577 0 0 0-.819 0 .584.584 0 0 0 .092.9c.91.834 2.32.81 3.2-.074l3.667-3.706a.585.585 0 0 0 0-.823m-5.634 2.39a.583.583 0 0 0-.097.902.6.6 0 0 0 .835.003l3.685-3.705a1.154 1.154 0 0 1 1.637 0 1.17 1.17 0 0 1 0 1.647l-3.493 3.529a1.154 1.154 0 0 0 1.637 0l2.675-2.706a2.34 2.34 0 0 0 0-3.293 2.31 2.31 0 0 0-3.275 0zm-.49-.33 3.668-3.706a.584.584 0 0 0 0-.823.576.576 0 0 0-.897.098l-3.59 3.608a1.153 1.153 0 0 1-1.637 0 1.17 1.17 0 0 1 0-1.647l3.494-3.528a1.153 1.153 0 0 0-1.638 0L4.678 8.359a2.337 2.337 0 0 0 0 3.293c.905.91 2.371.91 3.275 0" />
  </svg>
);
export default SvgSquarespaceCircle;