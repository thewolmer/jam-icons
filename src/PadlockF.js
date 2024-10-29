import * as React from "react";
const SvgPadlockF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0zm-5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-7V5a3 3 0 1 0-6 0v5z" />
  </svg>
);
export default SvgPadlockF;
