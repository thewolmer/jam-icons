import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighlighter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-0.5 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m8.038 11.06-1.035 3.207 1.776 1.775 3.165-1.077-3.906-3.906zm1.24-1.59 4.242 4.243 6.364-6.364a2 2 0 0 0 0-2.829L18.47 3.106a2 2 0 0 0-2.829 0L9.277 9.47zm-3.503 6.4L3.88 17.765l1.653 1.151 1.644-1.644zM19.884 1.692l1.414 1.414a4 4 0 0 1 0 5.657l-7.778 7.778-4.22 1.437-3.536 3.535L.778 18.04l4.291-4.292L6.45 9.47l7.778-7.778a4 4 0 0 1 5.657 0z" />
  </svg>
);
export default SvgHighlighter;
