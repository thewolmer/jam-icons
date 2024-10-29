import * as React from "react";
const SvgMessageWritingF = ({ title, titleId, ...props }) => (
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
    <path d="M3 .858h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.864v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3m10 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgMessageWritingF;
