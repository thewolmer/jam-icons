import * as React from "react";
const SvgPeriscopeSquare = ({ title, titleId, ...props }) => (
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
    <path d="M9.993 5C7.79 5 6.005 6.758 6.005 8.926c0 2.577 3.243 6.06 3.988 6.06s3.987-3.385 3.987-6.06C13.98 6.758 12.195 5 9.993 5m-.018 6.865c-1.568 0-2.839-1.251-2.839-2.795 0-1.543 1.271-2.794 2.839-2.794 1.567 0 2.838 1.25 2.838 2.794s-1.27 2.795-2.838 2.795" />
    <path d="M9.975 6.816q-.105 0-.21.01c.17.192.272.442.272.716 0 .606-.498 1.096-1.113 1.096-.43 0-.804-.24-.989-.593-.16.308-.25.656-.25 1.025 0 1.245 1.025 2.255 2.29 2.255 1.264 0 2.29-1.01 2.29-2.255s-1.025-2.254-2.29-2.254" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgPeriscopeSquare;
