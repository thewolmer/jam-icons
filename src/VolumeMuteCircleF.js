import * as React from "react";
const SvgVolumeMuteCircleF = ({ title, titleId, ...props }) => (
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
    <path d="m15.658 10.057.707-.707a1 1 0 1 0-1.414-1.415l-.707.708-.707-.708a1 1 0 0 0-1.414 1.415l.707.707-.707.707a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 0 0 1.414-1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m-4.718-6.713h1.005l1.823 1.71a2 2 0 0 0 1.368.54h.204a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.204a2 2 0 0 0-1.368.541l-1.823 1.71H5.282a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.796-4.5L9.282 6.72v6.634l-2.204-2.067H5.282v-2.5z" />
  </svg>
);
export default SvgVolumeMuteCircleF;
