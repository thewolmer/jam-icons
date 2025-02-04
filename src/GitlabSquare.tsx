import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitlabSquare = ({
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
    <path d="M10 14.616 8.159 8.95h3.682zm0 0L5.578 8.95h2.58zM5.578 8.95 10 14.616l-4.843-3.518a.38.38 0 0 1-.138-.427l.56-1.722zm0 0 1.11-3.413a.19.19 0 0 1 .362 0L8.159 8.95h-2.58zM10 14.616l1.841-5.667h2.58zm4.422-5.667.56 1.722a.38.38 0 0 1-.14.427L10 14.616zm0 0h-2.58l1.108-3.413a.19.19 0 0 1 .363 0z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgGitlabSquare;
