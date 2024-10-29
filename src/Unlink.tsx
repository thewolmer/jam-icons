import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnlink = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.456 10.218a1.93 1.93 0 0 0-1.902.492L2.5 12.762A1.935 1.935 0 0 0 5.238 15.5l2.052-2.053a1.93 1.93 0 0 0 .492-1.902.968.968 0 0 1-1.326-1.326Zm4.446-4.446a.968.968 0 0 1 1.326 1.326 1.93 1.93 0 0 0 1.902-.492l1.37-1.368A1.935 1.935 0 1 0 12.762 2.5l-1.368 1.37a1.93 1.93 0 0 0-.492 1.902m5.965-4.639a3.87 3.87 0 0 1 0 5.473l-1.368 1.368A3.87 3.87 0 0 1 10.026 2.5l1.368-1.368a3.87 3.87 0 0 1 5.473 0ZM8.658 9.342a3.87 3.87 0 0 1 0 5.472l-2.052 2.053a3.87 3.87 0 0 1-5.473-5.473l2.053-2.052a3.87 3.87 0 0 1 5.472 0" />
  </svg>
);
export default SvgUnlink;