import * as React from "react";
const SvgSetSquare = ({ title, titleId, ...props }) => (
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
    <path d="m3.413.646 15.97 15.938A2 2 0 0 1 17.972 20H2a2 2 0 0 1-2-2V2.061A2 2 0 0 1 3.413.646M2 2.06V18h15.97zm2 7.353a1 1 0 0 1 1.707-.707l5.586 5.586A1 1 0 0 1 10.586 16H5a1 1 0 0 1-1-1zM6 14h2l-2-2zm7 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
);
export default SvgSetSquare;
