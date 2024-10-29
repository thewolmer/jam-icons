import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStackoverflow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.492 18.136v-5.272h1.665v7.022H.13v-7.022h1.665v5.272z" />
    <path d="m3.632 12.364 8.173 1.795.346-1.727-8.173-1.796zm1.082-4.091 7.567 3.704.692-1.59-7.568-3.728zm2.097-3.91 6.421 5.614 1.06-1.34L7.87 3.022l-1.06 1.34zM10.962.206 9.622 1.25l4.973 7.045 1.34-1.045zM3.46 16.364h8.346v-1.75H3.46z" />
  </svg>
);
export default SvgStackoverflow;
