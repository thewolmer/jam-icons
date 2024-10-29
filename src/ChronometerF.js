import * as React from "react";
const SvgChronometerF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 11V8a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zm-1 7A6 6 0 1 1 7 6a6 6 0 0 1 0 12M9.928 4.553A8 8 0 0 0 7 4a8 8 0 0 0-2.928.553A2.5 2.5 0 0 1 5.5 0h3a2.5 2.5 0 0 1 1.428 4.553M5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.554 3.101a1.5 1.5 0 1 1 2.077 1.76 8 8 0 0 0-2.077-1.76M.869 6.861a1.5 1.5 0 1 1 2.077-1.76A8 8 0 0 0 .87 6.861z" />
  </svg>
);
export default SvgChronometerF;
