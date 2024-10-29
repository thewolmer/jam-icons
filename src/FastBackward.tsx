import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFastBackward = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 5.915 10.51.69a1.966 1.966 0 0 1 2.814-.182c.43.386.676.942.676 1.526v3.88L18.51.69a1.966 1.966 0 0 1 2.814-.182c.43.386.676.942.676 1.526v13.932C22 17.089 21.107 18 20.006 18a1.98 1.98 0 0 1-1.496-.69L14 12.085v3.88C14 17.09 13.107 18 12.006 18a1.98 1.98 0 0 1-1.496-.69L6 12.085V16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm0 3.092 6.006 6.959V2.034L6 8.993zm8 0 6.006 6.959V2.034L14 8.993zM2 2v14h2V2z" />
  </svg>
);
export default SvgFastBackward;