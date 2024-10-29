import * as React from "react";
const SvgUnsplash = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 10.35c0 1.736-1.375 3.086-3 3.086s-3-1.35-3-3.086 1.375-3.086 3-3.086c1.688.065 3 1.415 3 3.086m7-4.757v9.578c0 1.479-1.188 2.765-2.688 2.765H2.688C1.188 17.936 0 16.714 0 15.17V5.53c0-1.48 1.188-2.766 2.688-2.766H5l.5-1.478C5.75.579 6.563 0 7.313 0h5.375c.75 0 1.562.579 1.812 1.286l.5 1.543h2.313c1.5 0 2.687 1.221 2.687 2.764m-5.375 4.821c0-2.635-2.063-4.821-4.688-4.821-2.562 0-4.687 2.186-4.687 4.821 0 2.636 2.063 4.822 4.688 4.822a4.79 4.79 0 0 0 4.687-4.822" />
  </svg>
);
export default SvgUnsplash;