import * as React from "react";
const SvgGlue = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 11a1 1 0 0 0-1 1v7h6v-7a1 1 0 0 0-1-1zm1-5V1a1 1 0 1 1 2 0v5h1a1 1 0 0 1 1 1v2.17c1.165.413 2 1.524 2 2.83v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7c0-1.306.835-2.417 2-2.83V7a1 1 0 0 1 1-1zm0 2v1h2V8z" />
  </svg>
);
export default SvgGlue;
