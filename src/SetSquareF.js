import * as React from "react";
const SvgSetSquareF = ({ title, titleId, ...props }) => (
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
    <path d="M14 20v-1a1 1 0 0 0-2 0v1h-2v-1a1 1 0 0 0-2 0v1H6v-1a1 1 0 0 0-2 0v1H2a2 2 0 0 1-2-2V2.061A2 2 0 0 1 3.413.646l15.97 15.938A2 2 0 0 1 17.972 20zM4 9.414V15a1 1 0 0 0 1 1h5.586a1 1 0 0 0 .707-1.707L5.707 8.707A1 1 0 0 0 4 9.414" />
  </svg>
);
export default SvgSetSquareF;
