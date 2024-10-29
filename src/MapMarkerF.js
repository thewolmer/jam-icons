import * as React from "react";
const SvgMapMarkerF = ({ title, titleId, ...props }) => (
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
    <path d="M7 20.565q-7-9.135-7-13a7 7 0 1 1 14 0q0 3.865-7 13m0-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
  </svg>
);
export default SvgMapMarkerF;
