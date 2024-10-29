import * as React from "react";
const SvgMusic = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.954 12.304V1a1 1 0 0 1 1-1h.028a1 1 0 0 1 1 1v14.065c.197 1.969-1.42 3.99-3.874 4.693-2.69.772-5.368-.333-5.98-2.468s1.073-4.491 3.764-5.263c1.47-.421 2.935-.283 4.062.277m-2.4 5.521c1.698-.487 2.645-1.81 2.37-2.77-.276-.961-1.78-1.582-3.478-1.095s-2.645 1.81-2.37 2.771c.276.96 1.78 1.581 3.478 1.094" />
  </svg>
);
export default SvgMusic;
