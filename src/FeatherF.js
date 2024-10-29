import * as React from "react";
const SvgFeatherF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.393 12.029-4.461-1.196 3.018-3.018a1 1 0 1 0-1.414-1.414l-.897.897-1.195-4.462.677-.677a5 5 0 0 1 7.071 7.07zm-1.633 1.633-3.766 3.766-5.318-.339 4.623-4.623zM4.343 15.594l1.414 1.414-3.535 3.535A1 1 0 1 1 .808 19.13l3.45-3.45-.326-5.331L9.811 4.47l1.195 4.462z" />
  </svg>
);
export default SvgFeatherF;