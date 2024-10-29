import * as React from "react";
const SvgDeezerSquare = ({ title, titleId, ...props }) => (
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
    <path d="M5 12.111h1.82v1H5z" />
    <path d="M5 11.421h1.82v1H5z" />
    <path d="M5 10.731h1.82v1H5z" />
    <path d="M5 10.041h1.82v1H5z" />
    <path d="M5 9.351h1.82v1H5zm2.041 2.76h1.82v1h-1.82z" />
    <path d="M7.041 11.421h1.82v1h-1.82z" />
    <path d="M7.041 10.731h1.82v1h-1.82zm2.041 1.38h1.82v1h-1.82z" />
    <path d="M9.082 11.421h1.82v1h-1.82z" />
    <path d="M9.082 10.731h1.82v1h-1.82z" />
    <path d="M9.082 10.041h1.82v1h-1.82z" />
    <path d="M9.082 9.351h1.82v1h-1.82z" />
    <path d="M9.082 8.66h1.82v1h-1.82z" />
    <path d="M9.082 7.97h1.82v1h-1.82zm2.041 4.141h1.821v1h-1.821z" />
    <path d="M11.123 11.421h1.821v1h-1.821z" />
    <path d="M11.123 10.731h1.821v1h-1.821z" />
    <path d="M11.123 10.041h1.821v1h-1.821z" />
    <path d="M11.123 9.351h1.821v1h-1.821zm2.041 2.76h1.82v1h-1.82z" />
    <path d="M13.164 11.421h1.82v1h-1.82z" />
    <path d="M13.164 10.731h1.82v1h-1.82z" />
    <path d="M13.164 10.041h1.82v1h-1.82z" />
    <path d="M13.164 9.35h1.82v1h-1.82z" />
    <path d="M13.164 8.66h1.82v1h-1.82z" />
    <path d="M13.164 7.97h1.82v1h-1.82z" />
    <path d="M13.164 7.28h1.82v1h-1.82z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgDeezerSquare;
