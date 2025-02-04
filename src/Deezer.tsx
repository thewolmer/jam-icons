import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeezer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 9.786h3.64v1.062H0zm0-1.381h3.64v1.062H0zm0-1.38h3.64v1.062H0zm0-1.38h3.64v1.062H0zm0-1.381h3.64v1.062H0zm4.082 5.522h3.641v1.062H4.082zm0-1.381h3.641v1.062H4.082zm0-1.38h3.641v1.062H4.082zm4.082 2.761h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm4.082 8.283h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm4.082 5.522h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641z" />
  </svg>
);
export default SvgDeezer;
