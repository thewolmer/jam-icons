import * as React from "react";
const SvgStackoverflowSquare = ({ title, titleId, ...props }) => (
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
    <path d="M12.746 14.068v-2.636h.832v3.511H6.065v-3.511h.832v2.636z" />
    <path d="m7.816 11.182 4.087.898.173-.864-4.087-.898zm.54-2.046 3.785 1.853.345-.796L8.703 8.33zm1.05-1.954 3.21 2.807.53-.67-3.21-2.808zm2.075-2.08-.67.523 2.486 3.523.67-.523zm-3.751 8.08h4.173v-.875H7.73z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgStackoverflowSquare;
