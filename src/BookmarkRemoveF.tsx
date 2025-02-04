import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookmarkRemoveF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m8.414 9.858 1.414-1.414a1 1 0 0 0-1.414-1.415L7 8.444 5.586 7.029a1 1 0 1 0-1.414 1.415l1.414 1.414-1.414 1.414a1 1 0 1 0 1.414 1.414L7 11.272l1.414 1.414a1 1 0 0 0 1.414-1.414zM3 .858h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477l-2.978-2.717a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18.858v-15a3 3 0 0 1 3-3" />
  </svg>
);
export default SvgBookmarkRemoveF;
