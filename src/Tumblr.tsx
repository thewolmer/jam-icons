import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTumblr = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.888 15.905s-.614.683-1.781.683c-1.168 0-1.69-.683-1.69-1.692V9.18h3.775V5.715H7.417V0H4.575C4.13 2.564 2.38 4.7.005 5.748v3.431h2.773v6.584c0 .914.891 4.237 5.438 4.237 2.672 0 3.778-1.662 3.778-1.662z" />
  </svg>
);
export default SvgTumblr;
