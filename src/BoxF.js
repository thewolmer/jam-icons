import * as React from "react";
const SvgBoxF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20 5H0V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm0 2v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7h6.126a4.002 4.002 0 0 0 7.748 0z" />
  </svg>
);
export default SvgBoxF;
