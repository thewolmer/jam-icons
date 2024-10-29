import * as React from "react";
const SvgSetForwardSquare = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.514 9.836-3.929 2.808c-.905.646-2.13.389-2.736-.576a2.2 2.2 0 0 1-.335-1.17V7.102C5.514 5.942 6.397 5 7.487 5c.39 0 .773.124 1.098.356l3.93 2.808V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-2.164zM7.487 7.102v5.796L11.542 10z" />
  </svg>
);
export default SvgSetForwardSquare;
