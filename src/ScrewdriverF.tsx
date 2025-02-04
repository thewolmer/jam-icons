import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScrewdriverF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m18.778 7.464-4.95 4.95a2 2 0 0 1-2.828 0l-5.657 5.657a1 1 0 0 1 0 1.414L3.93 20.9a1 1 0 0 1-1.414 0L1.1 19.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0L9.586 11a2 2 0 0 1 0-2.828l4.95-4.95zm1.414-1.414L15.95 1.808l.707-.707a2 2 0 0 1 2.828 0L20.9 2.515a2 2 0 0 1 0 2.828z" />
  </svg>
);
export default SvgScrewdriverF;
