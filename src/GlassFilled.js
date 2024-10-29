import * as React from "react";
const SvgGlassFilled = ({ title, titleId, ...props }) => (
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
    <path d="M2.1 4h9.8a5 5 0 0 0-.9-2H3a5 5 0 0 0-.9 2m9.8 2H2.1a5.002 5.002 0 0 0 9.8 0M6 18v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
  </svg>
);
export default SvgGlassFilled;
