import * as React from "react";
const SvgTicket = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 9H8a1 1 0 1 1 0-2h2V2.001a5 5 0 0 1-8 0V7h2a1 1 0 1 1 0 2H2v8.999a5 5 0 0 1 8 0zM0 20V0h3.17a3.001 3.001 0 0 0 5.66 0H12v20H8.83a3.001 3.001 0 0 0-5.66 0z" />
  </svg>
);
export default SvgTicket;
