import * as React from "react";
const SvgTagsF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.963 1.478 2.483 2.483a2 2 0 0 1 .498 2L15.71 9.99l-7.93 7.93L0 10.142l7.899-7.899 4.056-1.26a2 2 0 0 1 2.008.495m-3.71 6.19a1.5 1.5 0 1 0 2.121-2.122 1.5 1.5 0 0 0-2.121 2.121zm7.222 1.047q.813.032 1.178-.273a1.5 1.5 0 0 0 .185-2.113q-.164-.196-.527-.364a2 2 0 0 0-.538-1.848L16.05 2.395l2.269-.706a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2l-1.235 4.028-7.93 7.931-2.795-2.794 5.688-5.688z" />
  </svg>
);
export default SvgTagsF;
