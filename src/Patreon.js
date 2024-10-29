import * as React from "react";
const SvgPatreon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.808.01c-3.95 0-7.164 3.196-7.164 7.125 0 3.916 3.214 7.103 7.164 7.103 3.938 0 7.142-3.187 7.142-7.103 0-3.93-3.204-7.125-7.142-7.125M.05 18.99V.01h3.502v18.98z" />
  </svg>
);
export default SvgPatreon;
