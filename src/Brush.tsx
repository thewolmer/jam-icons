import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrush = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.816 11.556c-1.008.464-1.69 1.003-2.084 1.598a52 52 0 0 0-1.115 1.756c1.124.244 1.969.127 2.578-.281.852-.57 1.408-1.221 1.717-1.977zm1.395-1.433 1.02 1.02c.742-.382 1.489-.987 2.234-1.832 1.139-1.29 3.061-3.588 5.757-6.88a.211.211 0 0 0-.297-.296c-3.286 2.693-5.583 4.615-6.881 5.758-.849.746-1.454 1.491-1.833 2.23m-.903 6.168q-2.423 1.622-6.63-.298a58 58 0 0 1 2.387-3.945q.983-1.48 3.17-2.422.728-1.688 2.487-3.236 1.98-1.743 6.936-5.803a2.21 2.21 0 0 1 3.111 3.111q-4.065 4.965-5.804 6.935-1.467 1.662-3.067 2.408-.645 1.946-2.59 3.249z" />
  </svg>
);
export default SvgBrush;
