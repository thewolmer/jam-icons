import * as React from "react";
const SvgFirstAidF = ({ title, titleId, ...props }) => (
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
    <path d="M5 4.858v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zm6 6v-2H9v2H7v2h2v2h2v-2h2v-2zm-4-6h6v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z" />
  </svg>
);
export default SvgFirstAidF;
