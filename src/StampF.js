import * as React from "react";
const SvgStampF = ({ title, titleId, ...props }) => (
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
    <path d="M8 7.465a4 4 0 1 1 4 0V14H8zM2 15h16a2 2 0 0 1 2 2v2H0v-2a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgStampF;
