import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaypal = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4.328 16.127-.011.07a.9.9 0 0 1-.887.744H.9a.892.892 0 0 1-.88-1.04L2.57.745A.89.89 0 0 1 3.45 0h6.92a4.14 4.14 0 0 1 4.142 4.141q0 .409-.05.804a3.63 3.63 0 0 1 1.53 2.962 5.72 5.72 0 0 1-5.72 5.722h-.583a1.34 1.34 0 0 0-1.32 1.117l-.314 1.87.314-1.87a1.34 1.34 0 0 1 1.32-1.117h.582a5.72 5.72 0 0 0 5.722-5.722 3.63 3.63 0 0 0-1.53-2.962 6.52 6.52 0 0 1-6.47 5.716H6.06a.97.97 0 0 0-.93.701l-1.155 6.862c-.08.48.289.916.775.916h2.214a.786.786 0 0 0 .775-.655l.315-1.87-.315 1.87a.786.786 0 0 1-.775.655H4.751a.78.78 0 0 1-.6-.278.78.78 0 0 1-.175-.638z" />
    <path d="M15.45 5.995c.365.567.578 1.242.578 1.967a5.72 5.72 0 0 1-5.722 5.722h-.581c-.654 0-1.212.472-1.32 1.117l-.63 3.739a.786.786 0 0 1-.774.655H4.973l1.15-6.833c.118-.41.495-.7.93-.7h1.932a6.52 6.52 0 0 0 6.464-5.667zm-10.477 13.2h-.187a.786.786 0 0 1-.775-.916l.057-.338h.355a.9.9 0 0 0 .886-.743l.012-.07z" />
  </svg>
);
export default SvgPaypal;