import * as React from "react";
const SvgJoystick = ({ title, titleId, ...props }) => (
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
    <path d="M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m1 7h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h6V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874zm-9 5h12v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zm2.5-6h2a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 1 0-3" />
  </svg>
);
export default SvgJoystick;
