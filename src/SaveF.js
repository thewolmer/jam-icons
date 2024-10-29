import * as React from "react";
const SvgSaveF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14 18.565v-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7H2a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h11.22a2 2 0 0 1 1.345.52l2.78 2.527A2 2 0 0 1 18 5.092v11.473a2 2 0 0 1-2 2zm-1-15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m-8 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm1 9h6v4H6zm0-5v-3h3v3z" />
  </svg>
);
export default SvgSaveF;
