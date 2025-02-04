import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinterestSquare = ({
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
    <path d="M9.355 11.614C9.1 12.99 8.79 14.31 7.866 15c-.284-2.08.419-3.644.745-5.303-.556-.964.067-2.906 1.24-2.427 1.445.588-1.25 3.586.56 3.96 1.888.392 2.66-3.374 1.488-4.6-1.692-1.768-4.927-.04-4.529 2.492.097.62.718.807.248 1.661-1.083-.247-1.406-1.127-1.365-2.3.067-1.92 1.675-3.263 3.289-3.45 2.04-.235 3.954.772 4.219 2.748.297 2.23-.921 4.646-3.103 4.472-.59-.047-.84-.35-1.303-.64z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgPinterestSquare;
