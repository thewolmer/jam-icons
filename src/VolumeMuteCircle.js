import * as React from "react";
const SvgVolumeMuteCircle = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m5.658-7.943.707.707a1 1 0 0 1-1.414 1.414l-.707-.707-.707.707a1 1 0 0 1-1.414-1.414l.707-.707-.707-.707a1 1 0 1 1 1.414-1.415l.707.708.707-.708a1 1 0 0 1 1.414 1.415zm-10.376 3.23a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005L8.11 5.078a2 2 0 0 1 1.368-.54h.204a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.204a2 2 0 0 1-1.368-.542l-1.823-1.709zm1.796-4.5H5.282v2.5h1.796l2.204 2.067V6.72z" />
  </svg>
);
export default SvgVolumeMuteCircle;
