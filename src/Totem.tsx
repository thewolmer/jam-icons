import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTotem = ({
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
    <path d="M8 18h4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zm6 .268A2 2 0 0 1 15 20H5a2 2 0 0 1 1-1.732V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3zM9 9h2v2H9zm1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M1.286 6h17.433a1 1 0 0 1 .97 1.243l-1.31 5.242A2 2 0 0 1 16.439 14H3.588a2 2 0 0 1-1.939-1.507L.317 7.246A1 1 0 0 1 1.286 6m1.286 2 1.017 4h12.85l1-4H2.571z" />
  </svg>
);
export default SvgTotem;
