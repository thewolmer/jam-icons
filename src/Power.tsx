import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPower = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 4.1a.97.97 0 0 1-.617-.898c0-.536.448-.972 1-.972q.175.001.332.055.001-.005.004-.003C15.834 3.658 18 6.708 18 10.252 18 15.082 13.97 19 9 19s-9-3.917-9-8.749C0 6.732 2.137 3.7 5.218 2.31a1 1 0 0 1 .392-.076c.552 0 1 .435 1 .971a.97.97 0 0 1-.61.896c-2.365 1.092-4 3.436-4 6.15 0 3.758 3.134 6.805 7 6.805s7-3.047 7-6.805c0-2.714-1.635-5.058-4-6.15zM9 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgPower;
