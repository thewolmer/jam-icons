import * as React from "react";
const SvgIceCream = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5 2a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3m1 12v5a1 1 0 0 1-2 0v-5H3a3 3 0 0 1-3-3V5a5 5 0 1 1 10 0v6a3 3 0 0 1-3 3z" />
  </svg>
);
export default SvgIceCream;
