import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLanguage = ({
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
    <path d="M11.525 14h4.385l-1.993-4.954zm5.19 2h-6.156l-1.658 3.435a1 1 0 0 1-1.802-.87l5.017-10.388a2 2 0 0 1 3.656.123l4.156 10.327a1 1 0 0 1-1.856.746zM1 0h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0 5a1 1 0 1 1 0-2h7.003a2 2 0 0 1 1.736 2.992c-.945 1.654-1.993 2.844-3.165 3.554-1.472.893-3.32 1.372-5.537 1.453a1 1 0 1 1-.074-1.998c1.898-.07 3.419-.464 4.574-1.165C6.384 7.323 7.213 6.382 8.003 5z" />
  </svg>
);
export default SvgLanguage;