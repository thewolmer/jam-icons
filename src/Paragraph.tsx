import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgParagraph = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 2v11a1 1 0 0 1-2 0V2H8v11a1 1 0 0 1-2 0V8H4a4 4 0 1 1 0-8h9a1 1 0 0 1 0 2zM6 6V2H4a2 2 0 1 0 0 4z" />
  </svg>
);
export default SvgParagraph;
