import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m10.026 17.609-2.121-2.122a1 1 0 1 0-1.415 1.415l2.122 2.12-2.475 2.476-4.43-.296a1 1 0 0 1-.932-.93L.48 15.84l6.898-6.898a7 7 0 1 1 5.657 5.657l-3.01 3.009zm3.535-9.193a2 2 0 1 0 2.829-2.828 2 2 0 0 0-2.829 2.828" />
  </svg>
);
export default SvgKeyF;
