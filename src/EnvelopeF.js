import * as React from "react";
const SvgEnvelopeF = ({ title, titleId, ...props }) => (
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
    <path d="M18.572.083 10.676 7.12a1 1 0 0 1-1.331 0L1.416.087A2 2 0 0 1 2 0h16a2 2 0 0 1 .572.083m1.356 1.385q.071.255.072.532v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 .072-.534l7.942 7.148a3 3 0 0 0 3.992 0z" />
  </svg>
);
export default SvgEnvelopeF;
