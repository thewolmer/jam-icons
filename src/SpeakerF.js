import * as React from "react";
const SvgSpeakerF = ({ title, titleId, ...props }) => (
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
    <path d="M3 0h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m4 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8M7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgSpeakerF;
