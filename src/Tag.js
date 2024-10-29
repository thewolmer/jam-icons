import * as React from "react";
const SvgTag = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m17.014.872 3.448 3.447a2 2 0 0 1 .463 2.103l-1.763 4.812a1 1 0 0 1-.232.363l-8.323 8.323a2 2 0 0 1-2.829 0l-6.364-6.364a2 2 0 0 1 0-2.828l8.333-8.333a1 1 0 0 1 .364-.232L14.913.408a2 2 0 0 1 2.101.464m-6.009 3.094-8.177 8.176 6.364 6.364 8.168-8.167 1.687-4.605L15.6 2.286zm2.784 3.58a1.5 1.5 0 1 1 2.12-2.121 1.5 1.5 0 0 1-2.12 2.12z" />
  </svg>
);
export default SvgTag;
