import * as React from "react";
const SvgMessenger = ({ title, titleId, ...props }) => (
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
    <path d="M3.683 16.418C1.436 14.722 0 12.14 0 9.248 0 4.14 4.477 0 10 0s10 4.14 10 9.248-4.477 9.248-10 9.248a10.8 10.8 0 0 1-2.96-.412l-3.357 1.891zm5.25-9.703-5.394 5.66 4.908-2.67 2.565 2.67 5.362-5.66-4.853 2.622-2.589-2.622z" />
  </svg>
);
export default SvgMessenger;
