import * as React from "react";
const SvgPaperPlaneF = ({ title, titleId, ...props }) => (
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
    <path d="M7.671 13.44 19.926 1.384c.116.408.096.847-.061 1.25l-6.25 16.08c-.395 1.016-1.532 1.538-2.54 1.165a1.9 1.9 0 0 1-1.097-1.054l-1.981-4.77q-.136-.325-.326-.617zm-1.41-1.288a4 4 0 0 0-.317-.148l-4.77-1.981C.185 9.61-.268 8.465.165 7.465a2.02 2.02 0 0 1 1.121-1.079l16.08-6.25c.46-.179.94-.175 1.365-.025L6.26 12.152z" />
  </svg>
);
export default SvgPaperPlaneF;
