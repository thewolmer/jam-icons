import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlane = ({
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
    <path d="m10.725 9.094-5.509 5.51-1.87-.777-.167.169 2.38 1.587 1.588 2.38.168-.168-.776-1.87 5.509-5.508 4.328 6.252.21-.208-2.887-7.696 4.4-4.398a.935.935 0 0 0-1.323-1.323l-4.4 4.399-7.694-2.886-.21.209zm5.39 10.483-4.33-6.253-3.04 3.04.777 1.87-2.666 2.665-2.645-3.967-3.968-2.646 2.666-2.666 1.869.776 3.04-3.04-6.253-4.328 2.646-2.645 7.695 2.885 3.547-3.547a2.806 2.806 0 1 1 3.968 3.968l-3.547 3.547 2.886 7.696-2.646 2.645z" />
  </svg>
);
export default SvgPlane;
