import * as React from "react";
const SvgMediumSquare = ({ title, titleId, ...props }) => (
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
    <path d="M6.186 7.632a.4.4 0 0 0-.126-.33L5.126 6.17V6h2.9l2.24 4.952L12.236 6H15v.17l-.798.77a.24.24 0 0 0-.089.226v5.668a.24.24 0 0 0 .089.225l.78.772V14H11.06v-.17l.807-.79c.08-.08.08-.103.08-.225V8.234L9.7 13.981h-.303L6.783 8.234v3.852a.53.53 0 0 0 .145.442l1.05 1.284v.17H5v-.17l1.05-1.284a.52.52 0 0 0 .136-.442z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgMediumSquare;
