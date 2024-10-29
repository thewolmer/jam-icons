import * as React from "react";
const SvgVolumeUpSquare = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.997 6.025a1 1 0 0 1 0-2 3.97 3.97 0 0 1 3.972 3.971v.04a3.97 3.97 0 0 1-3.972 3.972 1 1 0 1 1 0-2 1.97 1.97 0 0 0 1.972-1.972v-.04a1.97 1.97 0 0 0-1.972-1.971M13 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-7.88 4.256a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005l1.824-1.71a2 2 0 0 1 1.367-.54h.205a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.205a2 2 0 0 1-1.367-.541l-1.824-1.71H5.121zm1.796-4.5H5.121v2.5h1.795l2.205 2.067V6.689z" />
  </svg>
);
export default SvgVolumeUpSquare;