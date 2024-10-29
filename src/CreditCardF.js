import * as React from "react";
const SvgCreditCardF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20 4H0V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 3v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7zM4 9a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgCreditCardF;