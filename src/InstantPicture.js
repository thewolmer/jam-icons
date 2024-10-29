import * as React from "react";
const SvgInstantPicture = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14 8.322V2H2v12h3.576l3.97-5.292A3 3 0 0 1 14 8.322m0 3.753-1.188-2.066a1 1 0 0 0-1.667-.101L8.076 14H14zM14 16H2v2h12zM2 0h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m4 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgInstantPicture;
