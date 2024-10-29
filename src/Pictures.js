import * as React from "react";
const SvgPictures = ({ title, titleId, ...props }) => (
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
    <path d="M2 8v10h12V8zm2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm2 0h8a2 2 0 0 1 2 2v4h2V2H6zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1-7a3 3 0 1 1 6 0h-2a1 1 0 0 0-2 0zm1.864 13.518-1.728-1.007 2.725-4.673a3 3 0 0 1 4.8-.52l1.088 1.184-1.473 1.354-1.087-1.184a1 1 0 0 0-1.6.174zm6.512-12.97a2.99 2.99 0 0 1 3.285.77l1.088 1.184-1.473 1.354-1.087-1.184A1 1 0 0 0 16 8.457V8c0-.571-.24-1.087-.624-1.451z" />
  </svg>
);
export default SvgPictures;