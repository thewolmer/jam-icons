import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlashlightOffF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 6.757 14.243 11 5.05 20.192a2 2 0 0 1-2.828 0L.808 18.778a2 2 0 0 1 0-2.828zm.904-1.924a3 3 0 0 1 .695-1.09l3.35-3.35a1 1 0 0 1 1.415 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.32 3.32a3 3 0 0 1-1.134.712l-5.25-5.25zm-2.318 7.581a1 1 0 0 0 1.414 0L11.414 11A1 1 0 1 0 10 9.586L8.586 11a1 1 0 0 0 0 1.414" />
  </svg>
);
export default SvgFlashlightOffF;