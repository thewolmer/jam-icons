import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCogsF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14zM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7.393.061a8 8 0 0 0 .545-4.058L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13l-.312-1.056a7.96 7.96 0 0 0 3.821-1.674 3 3 0 1 0 2.384-3.177" />
  </svg>
);
export default SvgCogsF;