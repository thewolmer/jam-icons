import * as React from "react";
const SvgGift = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 12v6h10v-6zm11.437-5.952A2 2 0 0 1 16 8v2a2 2 0 0 1-1.017 1.742Q15 11.868 15 12v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6q0-.131.017-.258A2 2 0 0 1 0 10V8a2 2 0 0 1 1.563-1.952A4 4 0 0 1 8 1.354a4 4 0 0 1 6.437 4.694M14 8H2v2h12zM7 4a2 2 0 1 0-2 2h2zm2 2h2a2 2 0 1 0-2-2zM7 7h2v12H7z" />
  </svg>
);
export default SvgGift;
