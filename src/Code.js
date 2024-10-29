import * as React from "react";
const SvgCode = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631M2.414 8.256 5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.1 1.1 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0 1.1 1.1 0 0 1 0 1.494zm15.172 0L14.05 4.524a1.1 1.1 0 0 1 0-1.493.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0 1.1 1.1 0 0 1 0-1.492z" />
  </svg>
);
export default SvgCode;
