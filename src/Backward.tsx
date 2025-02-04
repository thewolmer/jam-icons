import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackward = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.51.69a1.966 1.966 0 0 1 2.814-.182c.43.386.676.942.676 1.526v13.932C20 17.089 19.107 18 18.006 18a1.98 1.98 0 0 1-1.496-.69l-6.012-6.966a2.065 2.065 0 0 1 0-2.688zm1.496 15.276V2.034L11.994 9zM6.51.69A1.966 1.966 0 0 1 9.324.508c.43.386.676.942.676 1.526v13.932C10 17.089 9.107 18 8.006 18a1.98 1.98 0 0 1-1.496-.69L.498 10.344a2.065 2.065 0 0 1 0-2.688zm1.496 15.276V2.034L1.994 9z" />
  </svg>
);
export default SvgBackward;
