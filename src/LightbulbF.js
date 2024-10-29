import * as React from "react";
const SvgLightbulbF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11 14.565H8v-8a1 1 0 1 0-2 0v8H3V13.31a7 7 0 1 1 8 0zm0 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z" />
  </svg>
);
export default SvgLightbulbF;
