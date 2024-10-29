import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpellCheck = ({
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
    <path
      fillRule="evenodd"
      d="M5.54 6.002H2.457L1.95 7.39c-.17.466-.734.722-1.26.57-.522-.15-.81-.651-.64-1.118L2.097 1.23C2.437.296 3.565-.215 4.615.087c.61.176 1.088.6 1.285 1.142L7.948 6.84c.17.467-.118.967-.643 1.119-.525.15-1.089-.105-1.259-.571zm-.73-2-.812-2.226-.811 2.226zm2.536 7.583 4.948-4.952a.999.999 0 1 1 1.413 1.415l-5.654 5.659a1 1 0 0 1-1.414 0l-2.827-2.83a1.001 1.001 0 0 1 1.414-1.414z"
    />
  </svg>
);
export default SvgSpellCheck;
