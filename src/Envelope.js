import * as React from "react";
const SvgEnvelope = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m3.598 2 5.747 5.12a1 1 0 0 0 1.33 0L16.423 2zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgEnvelope;
