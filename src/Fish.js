import * as React from "react";
const SvgFish = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.366 2.085C9.773 2.973 10 3.96 10 5s-.227 2.027-.634 2.915C12.104 7.567 14 6.215 14 5s-1.896-2.567-4.634-2.915M15 2.577c1.052-1.184 2.851-2.074 5-2.42v9.685c-2.149-.345-3.948-1.235-5-2.42C13.635 8.96 11.012 10 8 10c-4.418 0-8-2.239-8-5s3.582-5 8-5c3.012 0 5.635 1.04 7 2.577M18 7V3c-1.15.23-2 1.038-2 2s.85 1.77 2 2M2 5c0 1.27 2.077 2.696 5.032 2.958A4.97 4.97 0 0 0 8 5a4.97 4.97 0 0 0-.968-2.958C4.077 2.304 2 3.73 2 5m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgFish;
