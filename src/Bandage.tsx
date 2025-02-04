import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBandage = ({
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
    <path d="M18.697 1.445a4.69 4.69 0 0 1 0 6.635L8.08 18.697a4.692 4.692 0 0 1-6.635-6.635L12.062 1.445a4.69 4.69 0 0 1 6.635 0M17.37 2.772a2.815 2.815 0 0 0-3.981 0L2.772 13.39a2.815 2.815 0 1 0 3.981 3.98L17.37 6.754a2.813 2.813 0 0 0 0-3.98zm-5.972 4.645 1.327 1.327a.94.94 0 0 1 0 1.327l-2.654 2.654a.94.94 0 0 1-1.327 0l-1.327-1.327a.94.94 0 0 1 0-1.327l2.654-2.654a.94.94 0 0 1 1.327 0m.664-.664a.938.938 0 1 1 1.327-1.327.938.938 0 0 1-1.327 1.327M5.426 13.39a.938.938 0 1 1 1.327-1.327.938.938 0 0 1-1.327 1.327m9.953-7.3a.938.938 0 1 1 1.327-1.326.938.938 0 0 1-1.327 1.327zM4.763 16.707A.938.938 0 1 1 6.09 15.38a.938.938 0 0 1-1.327 1.327" />
  </svg>
);
export default SvgBandage;
