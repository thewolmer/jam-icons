import * as React from "react";
const SvgMicrochip = ({ title, titleId, ...props }) => (
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
    <path d="M6 3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m1 2v2h2V9zM6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M1 5h2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M1 13h2a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M6 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m8-16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M10 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgMicrochip;