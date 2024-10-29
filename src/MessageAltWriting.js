import * as React from "react";
const SvgMessageAltWriting = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.01 15.959q-.279.027-4.321 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005 0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955m-3.99.744c2.677-2.463 3.006-2.657 3.792-2.735C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957.783.495.958 1.117.941 1.778a3 3 0 0 1-.009.15c.022.33.032.92.033 1.814zM12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgMessageAltWriting;
