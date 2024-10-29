import * as React from "react";
const SvgCarF = ({ title, titleId, ...props }) => (
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
    <path d="M14 17H6v1.5A1.5 1.5 0 0 1 4.5 20h-1A1.5 1.5 0 0 1 2 18.5v-1.67A3 3 0 0 1 0 14v-3c0-.62.188-1.196.51-1.674l1.086-6.8A3 3 0 0 1 4.56 0h10.88a3 3 0 0 1 2.96 2.527l1.083 6.79c.326.48.516 1.06.516 1.683v3a3 3 0 0 1-2 2.83v1.67a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm3.25-8.99-.824-5.168A1 1 0 0 0 15.44 2H4.559a1 1 0 0 0-.988.842l-.825 5.169A3 3 0 0 1 3 8h14q.127 0 .25.01M15.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.704-10.906a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgCarF;
