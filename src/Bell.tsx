import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBell = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.666 11.782 13 11.186V6a4 4 0 1 0-8 0v5.186l-.666.596A7 7 0 0 0 2.29 15h13.42a7 7 0 0 0-2.044-3.218M12 17a3 3 0 0 1-6 0H0a8.98 8.98 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.98 8.98 0 0 1 18 17zm-3 1a1 1 0 0 0 1-1H8a1 1 0 0 0 1 1" />
  </svg>
);
export default SvgBell;
