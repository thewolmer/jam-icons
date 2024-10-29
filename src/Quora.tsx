import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuora = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.495 15.682s-.097 1.434-1.39 1.434c-1 0-1.682-.768-2.32-1.765 1.814-1.597 2.966-3.982 2.966-6.646C16.751 3.897 13.001 0 8.377 0S.003 3.897.003 8.705s3.749 8.705 8.374 8.705c.84 0 1.65-.129 2.414-.368.967 1.55 2.195 2.943 4.117 2.943 3.912 0 4.074-4.303 4.074-4.303zm-9.118.293c-2.696 0-4.882-3.255-4.882-7.27s2.186-7.27 4.882-7.27 4.882 3.255 4.882 7.27c0 1.597-.346 3.073-.932 4.272-.662-.953-1.456-1.764-2.592-2.022-2.015-.459-3.75.456-4.3.912l.517 1.076s.523-.303 1.82 0c.817.19 1.452 1.334 2.18 2.646a3.46 3.46 0 0 1-1.575.386" />
  </svg>
);
export default SvgQuora;