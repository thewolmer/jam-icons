import * as React from "react";
const SvgSearchFolder = ({ title, titleId, ...props }) => (
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
    <path d="M17 16a1 1 0 0 1 0-2 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.415l-.471-1.334A1 1 0 0 0 8 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1 1 1 0 0 1 0 2 3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3m-5.01-.096a5.002 5.002 0 0 1-6.293-7.707 5 5 0 0 1 7.707 6.293l2.9 2.9a1 1 0 0 1-1.415 1.413l-2.9-2.899zm-.636-2.05A3 3 0 1 0 7.11 9.61a3 3 0 0 0 4.243 4.243z" />
  </svg>
);
export default SvgSearchFolder;
