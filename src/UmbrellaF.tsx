import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUmbrellaF = ({
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
    <path d="M9 11H0c0-5.186 3.947-9.45 9.001-9.95L9 1a1 1 0 1 1 1.999.05C16.053 1.55 20 5.813 20 11h-9v6a1 1 0 0 0 2 0 1 1 0 0 1 2 0 3 3 0 0 1-6 0z" />
  </svg>
);
export default SvgUmbrellaF;
