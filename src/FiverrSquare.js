import * as React from "react";
const SvgFiverrSquare = ({ title, titleId, ...props }) => (
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
    <path d="M13.427 13.148v-5h-5v-.312c0-.517.42-.938.938-.938h.937V5.023h-.937a2.816 2.816 0 0 0-2.813 2.813v.312h-1.25v1.875h1.25v3.125h-1.25v1.875h4.375v-1.875h-1.25v-3.125h3.143v3.125h-1.268v1.875h4.375v-1.875z" />
    <circle cx={12.402} cy={5.971} r={1.001} />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgFiverrSquare;
