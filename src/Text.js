import * as React from "react";
const SvgText = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 1v2a1 1 0 0 1-2 0V2H7v8h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V2H2v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1" />
  </svg>
);
export default SvgText;
