import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuoraCircle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.5 17a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19" />
    <path d="M14.07 12.847s-.049.718-.696.718c-.5 0-.841-.385-1.16-.884a4.42 4.42 0 0 0 1.483-3.325C13.697 6.95 11.821 5 9.507 5s-4.19 1.95-4.19 4.356 1.876 4.356 4.19 4.356c.42 0 .826-.065 1.208-.184.484.775 1.098 1.472 2.06 1.472 1.958 0 2.039-2.153 2.039-2.153zm-4.563.147c-1.35 0-2.443-1.629-2.443-3.638s1.094-3.638 2.443-3.638c1.35 0 2.443 1.629 2.443 3.638 0 .799-.173 1.537-.466 2.138-.331-.477-.729-.883-1.297-1.013-1.009-.229-1.877.229-2.152.457l.259.539s.261-.152.91 0c.41.095.727.667 1.09 1.323a1.7 1.7 0 0 1-.787.194" />
  </svg>
);
export default SvgQuoraCircle;
