import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTree = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m10.728 5.547-.632-.446-.167-.755a3.002 3.002 0 0 0-5.858 0l-.167.755-.632.446A3 3 0 1 0 6.2 10.75l.801-.35.8.35a3 3 0 0 0 2.927-5.204zM8 12.9V19a1 1 0 0 1-2 0v-6.1a5 5 0 0 1-3.882-8.987 5.002 5.002 0 0 1 9.764 0A5 5 0 0 1 8 12.9" />
  </svg>
);
export default SvgTree;
