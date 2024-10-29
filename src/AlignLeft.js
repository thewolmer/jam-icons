import * as React from "react";
const SvgAlignLeft = ({ title, titleId, ...props }) => (
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
    <path d="M1 0h6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0 8h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2" />
  </svg>
);
export default SvgAlignLeft;
