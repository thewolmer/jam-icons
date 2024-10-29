import * as React from "react";
const SvgBackpack = ({ title, titleId, ...props }) => (
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
    <path d="M3 13v5h8v-5zm10-.764V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5.764c-.614-.55-1-1.348-1-2.236V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c0 .888-.386 1.687-1 2.236M3 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm5 5H6v-1a1 1 0 1 1 2 0zm0 2v1a1 1 0 0 1-2 0v-1zM3.5 0A1.5 1.5 0 0 1 5 1.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 3.5 0m7 0A1.5 1.5 0 0 1 12 1.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 10.5 0" />
  </svg>
);
export default SvgBackpack;
