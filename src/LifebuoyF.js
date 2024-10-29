import * as React from "react";
const SvgLifebuoyF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.268 16.41a10.05 10.05 0 0 1 0-12.721l4.318 4.318a4.03 4.03 0 0 0 0 4.085zm1.42 1.421 4.32-4.318a4.03 4.03 0 0 0 4.084 0l4.318 4.318a10.05 10.05 0 0 1-12.721 0zM16.41 2.268l-4.318 4.318a4.03 4.03 0 0 0-4.085 0L3.69 2.268a10.05 10.05 0 0 1 12.72 0m1.421 1.42a10.05 10.05 0 0 1 0 12.722l-4.318-4.318a4.03 4.03 0 0 0 0-4.085L17.83 3.69z" />
  </svg>
);
export default SvgLifebuoyF;
