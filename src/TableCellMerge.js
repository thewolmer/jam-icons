import * as React from "react";
const SvgTableCellMerge = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 2H2v2h2zm2 0v2h2V2h2v2h2V2zm6 4H6v6h6zm-8 6v-2H2v2zM2 8h2V6H2zm0-8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgTableCellMerge;