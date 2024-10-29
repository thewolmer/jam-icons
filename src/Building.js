import * as React from "react";
const SvgBuilding = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 0h7a3 3 0 0 1 3 3v17H0V3a3 3 0 0 1 3-3M2 18h9V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM4 4h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m0 3h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m4-9h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 3h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m-3 3h3a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgBuilding;