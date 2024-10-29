import * as React from "react";
const SvgMagnetF = ({ title, titleId, ...props }) => (
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
    <path d="M15 12c0-3.866-2.239-7-5-7s-5 3.134-5 7H0C0 5.373 4.477 0 10 0s10 5.373 10 12zM0 14h5v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm15 0h5v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z" />
  </svg>
);
export default SvgMagnetF;
