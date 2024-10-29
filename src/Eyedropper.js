import * as React from "react";
const SvgEyedropper = ({ title, titleId, ...props }) => (
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
    <path d="M6.502 12.348h2.829l2.707-2.578-1.414-1.347zm-1.987 1.905a4.7 4.7 0 0 0-1.002 1.653l-.334.954 1.002-.318a5.05 5.05 0 0 0 1.954-1.15l1.196-1.14H4.515zM14.866 9.77a.92.92 0 0 1 0 1.347 1.036 1.036 0 0 1-1.414 0L7.55 16.738a7.1 7.1 0 0 1-2.737 1.61l-2.899.921c-.523.166-1.09-.103-1.264-.602a.9.9 0 0 1 0-.603l.966-2.76a6.6 6.6 0 0 1 1.69-2.606L9.21 7.076a.92.92 0 0 1 0-1.347 1.036 1.036 0 0 1 1.414 0l4.242-4.04c1.172-1.116 3.071-1.116 4.243 0a2.76 2.76 0 0 1 0 4.04l-4.243 4.04zm-2.828-2.694 1.414 1.347 4.243-4.04a.92.92 0 0 0 0-1.347 1.036 1.036 0 0 0-1.414 0z" />
  </svg>
);
export default SvgEyedropper;