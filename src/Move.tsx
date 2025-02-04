import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMove = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-0.5 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m18.799 9.957-1.121-1.121a1 1 0 1 1 1.414-1.415l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l1.121-1.121h-6.485v6.485l1.121-1.121a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 1.414-1.414l1.122 1.121v-6.485H3.828l1.122 1.121a1 1 0 0 1-1.414 1.414L.707 11.664a1 1 0 0 1 0-1.414l2.829-2.83A1 1 0 0 1 4.95 8.836l-1.122 1.12h6.486V3.473l-1.122 1.12a1 1 0 0 1-1.414-1.414L10.607.35a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 1 1-1.414 1.414l-1.121-1.121v6.485z" />
  </svg>
);
export default SvgMove;
