import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSquarespace = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.305 7.16 9.3 1.134a3.837 3.837 0 0 1 5.447 0 .987.987 0 0 1-.027 1.365.96.96 0 0 1-1.363 0l-.09-.105a1.92 1.92 0 0 0-2.606.11l-6.128 6.16c-.403.374-1.013.374-1.388-.004a.97.97 0 0 1 .161-1.5zm13.456.131a.96.96 0 0 0-1.493.163L9.3 13.456a1.92 1.92 0 0 1-2.724 0l-.027-.005a.96.96 0 0 0-1.362 0 .97.97 0 0 0 .154 1.496 3.84 3.84 0 0 0 5.32-.123l6.101-6.164a.97.97 0 0 0 0-1.369zm-9.37 3.976a.97.97 0 0 0-.161 1.5c.375.377.984.377 1.388.004l6.128-6.161a1.92 1.92 0 0 1 2.723 0 1.94 1.94 0 0 1 0 2.738l-5.81 5.87a1.92 1.92 0 0 0 2.723 0l4.45-4.5a3.89 3.89 0 0 0 0-5.477 3.84 3.84 0 0 0-5.448 0L7.39 11.267zm-.816-.55 6.1-6.164a.97.97 0 0 0 0-1.369.96.96 0 0 0-1.492.163L5.213 9.35a1.92 1.92 0 0 1-2.723 0 1.94 1.94 0 0 1 0-2.739L8.301.742a1.92 1.92 0 0 0-2.724 0l-4.449 4.5a3.887 3.887 0 0 0 0 5.475 3.836 3.836 0 0 0 5.447 0" />
  </svg>
);
export default SvgSquarespace;
