import * as React from "react";
const SvgHeadset = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 16.09a1 1 0 1 1-2 0V10C0 4.477 4.477 0 10 0s10 4.477 10 10v3.086a1 1 0 1 1-2 0V10a8 8 0 1 0-16 0zM2 10h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m0 2v5h2v-5zm14-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m0 2v5h2v-5z" />
  </svg>
);
export default SvgHeadset;
