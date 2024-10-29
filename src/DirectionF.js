import * as React from "react";
const SvgDirectionF = ({ title, titleId, ...props }) => (
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
    <path d="M10 2h4.98a2 2 0 0 1 1.03.286L18.863 4a2.333 2.333 0 0 1 0 4L16.01 9.714a2 2 0 0 1-1.03.286H10v9a1 1 0 0 1-2 0v-9H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6V1a1 1 0 1 1 2 0z" />
  </svg>
);
export default SvgDirectionF;