import * as React from "react";
const SvgHighlighterF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m12.914 15.45-3.182 1.06-4.242-4.242 1.06-3.182zm1.414-1.414L7.964 7.672l6.364-6.364c1.566-1.566 3.969-1.69 5.657 0l.707.707c1.69 1.688 1.566 4.091 0 5.657zM7.964 17.57 5.136 20.4.893 17.571l3.536-3.535 3.535 3.535z" />
  </svg>
);
export default SvgHighlighterF;
