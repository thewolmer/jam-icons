import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCutterF = ({
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
    <path d="m9.684 17.995-1.928 2.298L.588 19.5l4.5-5.362zm2.052-.89-6.129-5.142 8.356-9.958a4 4 0 0 1 6.129 5.142l-8.356 9.959zm5.916-12.62a1 1 0 0 0-1.409.124l-.643.766a1 1 0 0 0 1.532 1.286l.643-.766a1 1 0 0 0-.123-1.41" />
  </svg>
);
export default SvgCutterF;
