import * as React from "react";
const SvgGamepad = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0zm2.318-4h5.364A6 6 0 0 1 24 6c0 3.314-2.686 10-6 10-1.976 0-3.729-2.378-4.822-5h-2.356C9.73 13.622 7.976 16 6 16 2.686 16 0 9.314 0 6a6 6 0 0 1 9.318-5m5.968 2H8.714l-.504-.335A4 4 0 0 0 2 6c0 3.117 2.542 8 4 8 .722 0 2.004-1.438 2.976-3.77L9.49 9h5.022l.513 1.23C15.996 12.562 17.278 14 18 14c1.458 0 4-4.883 4-8a4 4 0 0 0-6.21-3.335zM18 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgGamepad;
