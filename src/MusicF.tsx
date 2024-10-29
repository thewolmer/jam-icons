import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusicF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.954 12.87V1.564a1 1 0 0 1 1-1h.028a1 1 0 0 1 1 1V15.63c.197 1.969-1.42 3.99-3.874 4.693-2.69.772-5.368-.333-5.98-2.468s1.073-4.491 3.764-5.263c1.47-.421 2.935-.283 4.062.277z" />
  </svg>
);
export default SvgMusicF;
