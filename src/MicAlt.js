import * as React from "react";
const SvgMicAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3m0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V5a5 5 0 0 1 5-5M0 11.03a1 1 0 1 1 2 0A6.97 6.97 0 0 0 8.97 18h.06A6.97 6.97 0 0 0 16 11.03a1 1 0 1 1 2 0A8.97 8.97 0 0 1 9.03 20h-.06A8.97 8.97 0 0 1 0 11.03" />
  </svg>
);
export default SvgMicAlt;
