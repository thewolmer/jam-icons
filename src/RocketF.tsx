import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRocketF = ({
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
    <path d="M7.21 16.067a7 7 0 0 1-.664.772q-1.758 1.757-5.303 1.06-.697-3.545 1.06-5.303.372-.37.772-.663a9 9 0 0 0-2.599-.81A6 6 0 0 1 1.95 8.707a5.98 5.98 0 0 1 3.81-1.742 13.6 13.6 0 0 1 2.2-2.854c3.32-3.32 7.593-4.428 9.546-2.475s.845 6.227-2.475 9.546a13.6 13.6 0 0 1-2.854 2.2 5.98 5.98 0 0 1-1.742 3.81 5.96 5.96 0 0 1-2.416 1.474 9 9 0 0 0-.81-2.599zM13.262 5.88a1 1 0 1 0 1.415-1.415 1 1 0 0 0-1.415 1.415m-7.778 7.778q-.164-.165-.53-.503c-.432.15-.944.574-1.414 1.033-.371.363-.497.973-.5 1.92.946-.004 1.62-.22 1.914-.506.471-.459.89-.917 1.04-1.35-.112-.194-.346-.43-.51-.594" />
  </svg>
);
export default SvgRocketF;