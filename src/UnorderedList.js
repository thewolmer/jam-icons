import * as React from "react";
const SvgUnorderedList = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2M1 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
);
export default SvgUnorderedList;
