import * as React from "react";
const SvgSnowboardF = ({ title, titleId, ...props }) => (
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
    <path d="M18.504 1.47a3.61 3.61 0 0 1-.263 5.34q-4.646 3.811-6.101 5.266t-5.266 6.101a3.61 3.61 0 0 1-5.34.263 3.48 3.48 0 0 1 .291-5.183A72.4 72.4 0 0 0 13.321 1.761a3.48 3.48 0 0 1 5.183-.291m-7.071 7.07a1 1 0 1 0 1.414-1.413 1 1 0 0 0-1.414 1.414zM7.19 12.785a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.414 1.415" />
  </svg>
);
export default SvgSnowboardF;
