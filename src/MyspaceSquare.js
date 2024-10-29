import * as React from "react";
const SvgMyspaceSquare = ({ title, titleId, ...props }) => (
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
    <ellipse cx={6.418} cy={9.443} rx={1.288} ry={1.275} />
    <path d="M6.4 11.051c-.78.01-1.4.654-1.4 1.426v.359c0 .083.068.15.152.15h2.531a.15.15 0 0 0 .152-.15v-.382A1.41 1.41 0 0 0 6.4 11.051" />
    <ellipse cx={9.68} cy={9.151} rx={1.394} ry={1.38} />
    <path d="M9.661 10.892a1.54 1.54 0 0 0-1.515 1.543v.4c0 .084.068.151.152.151h2.764a.15.15 0 0 0 .153-.15v-.425c0-.845-.698-1.53-1.554-1.519m3.582-.717c.882 0 1.597-.708 1.597-1.581s-.715-1.58-1.597-1.58-1.597.707-1.597 1.58.715 1.58 1.597 1.58zm0 .413c-.97 0-1.757.779-1.757 1.74v.508c0 .083.068.15.152.15h3.21a.15.15 0 0 0 .152-.15v-.509c0-.96-.787-1.74-1.757-1.74z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgMyspaceSquare;
