import * as React from "react";
const SvgMaskF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 1.878q2.64-1.02 4.5-1.02a5.5 5.5 0 0 1 0 11q-1.86 0-4.5-1.057-2.64 1.057-4.5 1.057a5.5 5.5 0 0 1 0-11q1.86 0 4.5 1.02m-4 5.98c1.105 0 2-.672 2-1.5 0-.829-.895-1.5-2-1.5s-2 .671-2 1.5c0 .828.895 1.5 2 1.5m8 0c1.105 0 2-.672 2-1.5 0-.829-.895-1.5-2-1.5s-2 .671-2 1.5c0 .828.895 1.5 2 1.5" />
  </svg>
);
export default SvgMaskF;
