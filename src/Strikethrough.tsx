import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStrikethrough = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -5.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.657 4.935H1.15a3 3 0 0 1-.15-.94v-.497A3.5 3.5 0 0 1 4.498 0H6a3 3 0 0 1 3 3 1 1 0 1 1-2 0 1 1 0 0 0-1-1H4.498C3.67 2 3 2.67 3 3.498v.497a1 1 0 0 0 .657.94m5.186 2.1c.102.301.157.624.157.96v.528a3.53 3.53 0 0 1-3.528 3.528H4a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v.05a1 1 0 0 0 1 1h1.472C6.316 10.05 7 9.367 7 8.523v-.528a1 1 0 0 0-.72-.96zM.5 5.51h9a.5.5 0 0 1 0 1h-9a.5.5 0 1 1 0-1" />
  </svg>
);
export default SvgStrikethrough;
