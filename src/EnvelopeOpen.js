import * as React from "react";
const SvgEnvelopeOpen = ({ title, titleId, ...props }) => (
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
    <path d="m2.328 6.868 7.017 6.253a1 1 0 0 0 1.33 0l7.009-6.246-7.137-4.665a1 1 0 0 0-1.094 0zM18 7.082v2.19l-5.994 5.342a3 3 0 0 1-3.992 0L2 9.254V7.083 18h16zM.906 5.408 8.359.536a3 3 0 0 1 3.282 0l7.453 4.872A2 2 0 0 1 20 7.082V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.082a2 2 0 0 1 .906-1.674" />
  </svg>
);
export default SvgEnvelopeOpen;
