import * as React from "react";
const SvgAperture = ({ title, titleId, ...props }) => (
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
    <path d="m8.164 11.107 1.817 1.049 1.87-1.08V9.01L9.96 7.92 8.164 9.042zm-2-1.155V2.978a8.02 8.02 0 0 0-3.839 4.758zm-4.163-.094L2 10a7.97 7.97 0 0 0 2.19 5.499l3.79-2.189zm6.163-3.174 5.808-3.63A7.96 7.96 0 0 0 10 2q-.95.002-1.836.212zm7.503-2.33-3.786 2.365 6.115 3.531a7.98 7.98 0 0 0-2.329-5.897zm-1.816 5.812v6.848a8.02 8.02 0 0 0 3.796-4.656zm-7.993 6.68A7.96 7.96 0 0 0 10 18c.637 0 1.257-.074 1.85-.215v-4.4l-5.992 3.46zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgAperture;
