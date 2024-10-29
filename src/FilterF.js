import * as React from "react";
const SvgFilterF = ({ title, titleId, ...props }) => (
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
    <path d="M1.08.858h15.84a1 1 0 0 1 .78 1.625l-6.48 8.101a1 1 0 0 0-.22.625v5.149a1 1 0 0 1-.4.8l-2 1.5a1 1 0 0 1-1.6-.8v-6.65a1 1 0 0 0-.22-.624L.3 2.483A1 1 0 0 1 1.08.858" />
  </svg>
);
export default SvgFilterF;
