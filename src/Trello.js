import * as React from "react";
const SvgTrello = ({ title, titleId, ...props }) => (
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
    <path d="M17.562 0H2.438A2.435 2.435 0 0 0 0 2.432v15.087a2.435 2.435 0 0 0 2.438 2.432h15.124A2.435 2.435 0 0 0 20 17.519V2.432A2.435 2.435 0 0 0 17.562 0M8.7 15.55a1.13 1.13 0 0 1-1.132 1.13H3.732A1.13 1.13 0 0 1 2.6 15.55V3.893c0-.624.507-1.13 1.132-1.13h3.836A1.13 1.13 0 0 1 8.7 3.893zm8.7-5.015a1.13 1.13 0 0 1-1.132 1.13h-3.836a1.13 1.13 0 0 1-1.132-1.13V3.893c0-.624.507-1.13 1.132-1.13h3.836a1.13 1.13 0 0 1 1.132 1.13z" />
  </svg>
);
export default SvgTrello;