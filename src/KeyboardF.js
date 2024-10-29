import * as React from "react";
const SvgKeyboardF = ({ title, titleId, ...props }) => (
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
    <path d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 6v2h2V6zm0-3v2h2V3zm0 6v2h2V9zm3 0v2h8V9zm0-3v2h2V6zm0-3v2h2V3zm3 3v2h2V6zm0-3v2h2V3zm6 6v2h2V9zm-3-3v2h2V6zm0-3v2h2V3zm3 0v5h2V3z" />
  </svg>
);
export default SvgKeyboardF;
