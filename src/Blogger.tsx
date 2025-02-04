import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlogger = ({
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
    <path d="M13.593 19.96c3.48 0 6.307-2.836 6.327-6.297l.039-5.095-.059-.278-.167-.348-.283-.22c-.367-.287-2.228.02-2.729-.435-.355-.324-.41-.91-.518-1.706-.2-1.54-.326-1.62-.568-2.142C14.76 1.585 12.382.193 10.75 0H6.325C2.845 0 0 2.839 0 6.307v7.356c0 3.461 2.845 6.296 6.325 6.296h7.268zM6.406 5.151h3.507c.67 0 1.212.544 1.212 1.205 0 .657-.542 1.206-1.212 1.206H6.406c-.67 0-1.21-.549-1.21-1.206 0-.661.54-1.205 1.21-1.205m-1.21 8.418c0-.66.54-1.2 1.21-1.2h7.127c.665 0 1.205.54 1.205 1.2 0 .652-.54 1.2-1.205 1.2H6.406a1.21 1.21 0 0 1-1.21-1.2" />
  </svg>
);
export default SvgBlogger;
