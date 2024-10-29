import * as React from "react";
const SvgTableColAfter = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 0a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V2H6v10h6v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM4 10H2v2h2zm6-6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V8H8a1 1 0 1 1 0-2h1V5a1 1 0 0 1 1-1M4 6H2v2h2zm0-4H2v2h2z" />
  </svg>
);
export default SvgTableColAfter;