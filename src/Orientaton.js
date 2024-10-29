import * as React from "react";
const SvgOrientaton = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 10.941v7h12v-7zm0-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2m9.012-2h-2V2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18v-2h.012V2h-7z" />
  </svg>
);
export default SvgOrientaton;
