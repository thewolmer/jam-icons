import * as React from "react";
const SvgBandageF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.92 1.536a5 5 0 0 1 0 7.07L8.607 19.92a5 5 0 1 1-7.071-7.07L12.849 1.535a5 5 0 0 1 7.071 0zm-7.778 6.363a1 1 0 0 0-1.414 0l-2.829 2.829a1 1 0 0 0 0 1.414l1.415 1.414a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 0 0 0-1.414zm.707-.707a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414m-7.07 7.071a1 1 0 1 0 1.413-1.414 1 1 0 0 0-1.414 1.414zm10.606-7.778a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414M5.07 17.8a1 1 0 1 0 1.414-1.414A1 1 0 0 0 5.07 17.8" />
  </svg>
);
export default SvgBandageF;
