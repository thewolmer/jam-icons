import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBloggerCircle = ({
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M11.81 15c1.744 0 3.16-1.42 3.17-3.154L15 9.293l-.03-.14-.083-.174-.142-.11c-.184-.144-1.116.01-1.367-.218-.178-.163-.206-.456-.26-.855-.1-.771-.163-.811-.284-1.073-.44-.929-1.63-1.627-2.448-1.723H8.169A3.174 3.174 0 0 0 5 8.16v3.686C5 13.58 6.426 15 8.17 15zm-3.6-7.419h1.757c.335 0 .607.273.607.604s-.272.604-.607.604H8.21a.61.61 0 0 1-.607-.604c0-.331.271-.604.607-.604M7.603 11.8c0-.33.271-.601.607-.601h3.57c.333 0 .604.27.604.601 0 .327-.27.601-.604.601H8.21a.607.607 0 0 1-.607-.601" />
  </svg>
);
export default SvgBloggerCircle;
