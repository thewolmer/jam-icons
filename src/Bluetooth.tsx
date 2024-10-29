import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBluetooth = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m7.414 10 4.294 4.294A1 1 0 0 1 12 15q0 .403-.35.76l-4.947 3.958q-.555.447-1.105.19T5 19.006v-6.592l-3.293 3.293a1 1 0 1 1-1.414-1.414L4.586 10 .293 5.707a1 1 0 1 1 1.414-1.414L5 7.586v-6.56C5 .448 5.448 0 6 0a1 1 0 0 1 .602.201l4.91 3.928c.293.187.488.506.488.871 0 .33-.16.623-.407.805zM7 16.92l2.503-2.003L7 12.414v4.505zM9.503 5.082 7 3.08v4.505z" />
  </svg>
);
export default SvgBluetooth;
