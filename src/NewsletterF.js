import * as React from "react";
const SvgNewsletterF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 .565h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m3 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2zm10-5v2h2v-2z" />
  </svg>
);
export default SvgNewsletterF;
