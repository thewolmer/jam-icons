import * as React from "react";
const SvgComputerAltF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1 14h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2M2 0h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgComputerAltF;
