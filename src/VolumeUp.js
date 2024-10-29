import * as React from "react";
const SvgVolumeUp = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 2h-.6a2 2 0 0 0-1.444.617L6.239 6.5H2v5h4.239l3.717 3.883A2 2 0 0 0 11.4 16h.6zM5.385 4.5 8.51 1.234A4 4 0 0 1 11.401 0H13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1.6a4 4 0 0 1-2.889-1.234L5.385 13.5H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM16 7a1 1 0 0 1 0-2 4 4 0 1 1 0 8 1 1 0 0 1 0-2 2 2 0 1 0 0-4m0-4a1 1 0 0 1 0-2 8 8 0 1 1 0 16 1 1 0 0 1 0-2 6 6 0 1 0 0-12" />
  </svg>
);
export default SvgVolumeUp;