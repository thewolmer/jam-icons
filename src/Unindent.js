import * as React from "react";
const SvgUnindent = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m6-4h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2m-6.44.143 2.057-1.234a1 1 0 0 1 1.515.857v2.468a1 1 0 0 1-1.515.857L.561 5.857a1 1 0 0 1 0-1.714z" />
  </svg>
);
export default SvgUnindent;
