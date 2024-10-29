import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeMute = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 2h-.6a2 2 0 0 0-1.444.617L6.239 6.5H2v5h4.239l3.717 3.883A2 2 0 0 0 11.4 16h.6zM5.385 4.5 8.51 1.234A4 4 0 0 1 11.401 0H13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1.6a4 4 0 0 1-2.889-1.234L5.385 13.5H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM19.415 9l1.413 1.414a1 1 0 1 1-1.414 1.414L18 10.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L16.586 9l-1.414-1.414a1 1 0 0 1 1.414-1.414L18 7.586l1.414-1.414a1 1 0 1 1 1.414 1.414z" />
  </svg>
);
export default SvgVolumeMute;
