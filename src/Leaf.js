import * as React from "react";
const SvgLeaf = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3.5 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.237 15.747a8.56 8.56 0 0 0-1.17 4.324 1 1 0 1 1-2 0c0-2.123.637-4.163 1.785-5.879a7 7 0 0 1 .062-7.738Q4.078 3.249 16.084.801q-.402 10.277-2.563 13.482a7 7 0 0 1-10.284 1.464m1.206-1.6a5 5 0 0 0 7.42-.984c1.004-1.488 1.737-4.815 2.084-9.85C8.004 4.7 4.484 6.222 3.572 7.573a5 5 0 0 0-.357 4.972q.645-.636 1.4-1.16l.508-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.6 8.6 0 0 0-1.312 1.119z" />
  </svg>
);
export default SvgLeaf;
