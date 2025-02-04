import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUmbrellaClosedF = ({
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
    <path d="m6 13.983-6 1.582L6.234 2.207a1 1 0 1 1 1.533 0L14 15.565l-6-1.582v3.582a1 1 0 0 0 2 0 1 1 0 0 1 2 0 3 3 0 0 1-6 0z" />
  </svg>
);
export default SvgUmbrellaClosedF;
