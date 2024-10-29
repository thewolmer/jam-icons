import * as React from "react";
const SvgInbox = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 5.702V12h16V5.702L15.039 2H4.96zM0 5l4-5h12l4 5v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13.874 2a4.002 4.002 0 0 1-7.748 0H2V5h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0" />
  </svg>
);
export default SvgInbox;