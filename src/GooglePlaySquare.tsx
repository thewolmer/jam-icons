import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGooglePlaySquare = ({
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
    <path d="m14.335 9.61-1.817-1.05-1.495 1.446 1.366 1.322 1.946-1.124a.34.34 0 0 0 .172-.297.34.34 0 0 0-.172-.298zM12.21 8.38l-2-1.155-4.384-2.25 4.95 4.793zM5.9 14.966l4.317-2.382 1.864-1.077-1.304-1.263zM5.534 5.17l-.005 9.677 5.002-4.841z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgGooglePlaySquare;
