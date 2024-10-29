import * as React from "react";
const SvgBottle = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.975 9H10v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9h.025a4 4 0 0 1 .902-2.113l1.11-1.33A2 2 0 0 0 2.5 4.275V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.276a2 2 0 0 0 .464 1.28l1.109 1.331A4 4 0 0 1 9.975 9M7.949 9a2 2 0 0 0-.413-.832L6.427 6.837A4 4 0 0 1 5.5 4.276V2h-1v2.276a4 4 0 0 1-.927 2.56l-1.11 1.332A2 2 0 0 0 2.052 9zM8 16H2v2h6zm-6-5v3h6v-3z" />
  </svg>
);
export default SvgBottle;
