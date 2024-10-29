import * as React from "react";
const SvgSelectAll = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.01 14a1 1 0 0 1 .988 1h12.004a1 1 0 0 1 1-1V4a1 1 0 0 1-1-1H4.01a1 1 0 0 1-1 1zm.988 3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.01V4a1 1 0 0 1-.998-1V1a1 1 0 0 1 .999-1H3.01a1 1 0 0 1 1 1h11.992a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.998a1 1 0 0 1-1-1z" />
  </svg>
);
export default SvgSelectAll;
