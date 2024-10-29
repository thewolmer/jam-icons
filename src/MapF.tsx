import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 2.641v18a5 5 0 0 1-1.581-.256L8 19.245V1.175a5 5 0 0 1 .581.156l3.47 1.157A3 3 0 0 0 13 2.64zm2-.504 3.662-1.22A1 1 0 0 1 20 1.858v16a1 1 0 0 1-.706.956L15 20.245zm-9-.962v18.07L1.338 20.8A1 1 0 0 1 0 19.858v-16a1 1 0 0 1 .706-.956L5.419 1.33A5 5 0 0 1 6 1.175" />
  </svg>
);
export default SvgMapF;
