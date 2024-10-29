import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForkF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.033 15.04A3.001 3.001 0 1 1 7 15.03v-1.047q0-.111.008-.221a1 1 0 0 0-.462-.638L3.46 11.277A3 3 0 0 1 2 8.703V6.687a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324 3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V6.699A3.001 3.001 0 0 1 13 .858a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.574l-3.086 1.846a1 1 0 0 0-.462.638q.008.11.008.22v1.06z" />
  </svg>
);
export default SvgForkF;