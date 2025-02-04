import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDisqusSquare = ({
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
    <path d="M10.172 14.665a4.88 4.88 0 0 1-3.116-1.113l-2.068.271.797-1.903a4.5 4.5 0 0 1-.433-1.944c0-2.59 2.159-4.689 4.819-4.689 2.664 0 4.82 2.099 4.82 4.689s-2.156 4.689-4.82 4.689zm.03-7.19H8.426v5.001h1.751c1.657 0 2.625-1.072 2.625-2.514v-.013c0-1.442-.956-2.474-2.6-2.474" />
    <path d="M11.491 9.979c0 .81-.506 1.267-1.27 1.267h-.519V8.702h.519c.764 0 1.27.464 1.27 1.264z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgDisqusSquare;
