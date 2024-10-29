import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSnowflake = ({
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
    <path d="M9 6.126V1a1 1 0 1 1 2 0v5.126c.367.094.714.24 1.032.428l2.21-2.21a1 1 0 1 1 1.415 1.413l-2.21 2.211c.187.318.333.665.427 1.032H19a1 1 0 0 1 0 2h-5.126a4 4 0 0 1-.428 1.032l2.21 2.21a1 1 0 1 1-1.413 1.415l-2.211-2.21a4 4 0 0 1-1.032.427V19a1 1 0 0 1-2 0v-5.126a4 4 0 0 1-1.032-.428l-2.21 2.21a1 1 0 0 1-1.415-1.413l2.21-2.211A4 4 0 0 1 6.127 11H1a1 1 0 0 1 0-2h5.126a4 4 0 0 1 .428-1.032l-2.21-2.21a1 1 0 0 1 1.413-1.415l2.211 2.21A4 4 0 0 1 9 6.127zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-1 5.318-.393.393a.985.985 0 0 1-1.393-1.393L9 14.532zm2-2.786 1.786 1.786a.985.985 0 0 1-1.393 1.393L11 17.318zm0-11.85.393-.393a.985.985 0 0 1 1.393 1.393L11 5.468zM9 5.468 7.214 3.682a.985.985 0 0 1 1.393-1.393L9 2.682zM17.318 11l.393.393a.985.985 0 0 1-1.393 1.393L14.532 11zm-2.786-2 1.786-1.786a.985.985 0 0 1 1.393 1.393L17.318 9zM2.682 9l-.393-.393a.985.985 0 0 1 1.393-1.393L5.468 9zm2.786 2-1.786 1.786a.985.985 0 0 1-1.393-1.393L2.682 11z" />
  </svg>
);
export default SvgSnowflake;