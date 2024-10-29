import * as React from "react";
const SvgVoicemail = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.743 9h4.514A5.5 5.5 0 1 1 19 10.978V11H6v-.022A5.5 5.5 0 1 1 9.743 9M5.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
  </svg>
);
export default SvgVoicemail;
