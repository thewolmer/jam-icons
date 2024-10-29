import * as React from "react";
const SvgCloudThunder = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 14a1 1 0 0 1 0-2 5 5 0 1 0-4.6-6.965l-.72 1.686-1.742-.572A3 3 0 1 0 5 12h2a1 1 0 0 1 0 2H5a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7m-2.29-2.936c.519.198.787.801.598 1.346L9.94 16.36c-.19.545-.763.826-1.282.627s-.786-.801-.597-1.346l1.368-3.95c.188-.545.762-.826 1.281-.627m1.632 3.949c.519.198.786.801.597 1.346l-1.368 3.95c-.188.545-.762.826-1.281.627s-.787-.801-.598-1.346l1.368-3.95c.19-.545.763-.826 1.282-.627M9 14.949h3c.552 0 1 .47 1 1.051 0 .58-.448 1.05-1 1.05H9c-.552 0-1-.47-1-1.05s.448-1.05 1-1.05z" />
  </svg>
);
export default SvgCloudThunder;
