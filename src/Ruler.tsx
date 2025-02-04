import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRuler = ({
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
    <path d="m14.95 7.879-.707-.707a1 1 0 0 1 1.414-1.415l.707.707 1.414-1.414-2.828-2.828L2.222 14.95l2.828 2.828 1.414-1.414L5.05 14.95a1 1 0 0 1 1.414-1.414L7.88 14.95l1.414-1.414-.707-.708A1 1 0 0 1 10 11.414l.707.707 1.414-1.414-1.414-1.414a1 1 0 0 1 1.414-1.414l1.415 1.414zM.808 13.536 13.536.808a2 2 0 0 1 2.828 0l2.828 2.828a2 2 0 0 1 0 2.828L6.464 19.192a2 2 0 0 1-2.828 0L.808 16.364a2 2 0 0 1 0-2.828" />
  </svg>
);
export default SvgRuler;
