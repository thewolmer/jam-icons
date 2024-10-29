import * as React from "react";
const SvgBackgroundColor = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m7.543 8 .506 1.386c.17.466.734.722 1.26.57.525-.15.813-.651.643-1.117l-2.05-5.61c-.197-.542-.675-.967-1.285-1.142-1.05-.302-2.179.209-2.52 1.141L2.05 8.838c-.17.467.118.967.643 1.119.525.15 1.09-.105 1.26-.571L4.458 8zm-.73-2H5.188L6 3.776zM2 0h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgBackgroundColor;
