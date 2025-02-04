import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCutlery = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m3.303 16.738 8.066-8.065.894.05c1.065.061 2.369-.485 3.415-1.53 1.636-1.637 1.934-3.723 1.06-4.597-.873-.873-2.96-.575-4.596 1.06-1.046 1.047-1.592 2.35-1.531 3.416l.05.894-8.065 8.065a.5.5 0 0 0 .707.707m1.415 1.415a2.5 2.5 0 0 1-3.536-3.536l7.432-7.432c-.092-1.614.643-3.471 2.114-4.942 2.343-2.344 5.667-2.818 7.425-1.061 1.757 1.757 1.282 5.081-1.061 7.425-1.471 1.47-3.329 2.205-4.943 2.114z" />
  </svg>
);
export default SvgCutlery;
