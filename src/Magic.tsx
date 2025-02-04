import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagic = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.243 7.172 3.535-3.536-.707-.707-3.535 3.535zm-1.415 1.414-.707-.707L2.93 17.07l.707.707 9.192-9.192zm4.95-7.778 2.121 2.12a1 1 0 0 1 0 1.415L4.343 19.9a1 1 0 0 1-1.414 0L.808 17.78a1 1 0 0 1 0-1.415L16.364.808a1 1 0 0 1 1.414 0M8.586.1l1.393.704L11.414.1l-.68 1.46.68 1.368-1.384-.664-1.444.664.689-1.42zm9.9 7.07 1.393.705 1.435-.704-.68 1.46.68 1.368-1.384-.664-1.445.664.69-1.42-.69-1.408z" />
  </svg>
);
export default SvgMagic;
