import * as React from "react";
const SvgExtinguisher = ({ title, titleId, ...props }) => (
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
    <path d="M9.45 4.145A2 2 0 0 1 6.067 4H4a2 2 0 0 0-2 2v3a1 1 0 1 1-2 0V6a4 4 0 0 1 4-4h2.077a2 2 0 0 1 3.381-.117A1 1 0 0 1 11.45 2h1.311L18.722.036l.003.002a1 1 0 0 1 1.273.906L20 .945v3.992l-.002.001L20 5a1 1 0 0 1-1.275.962l-.003.002L12.892 4H11.45v1.009q0 .045-.004.09A4.5 4.5 0 0 1 15 9.5V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9.5a4.5 4.5 0 0 1 3.457-4.378 1 1 0 0 1-.007-.113zm8.597-.471V2.436l-1.866.597zM10.5 7A2.5 2.5 0 0 0 8 9.5V17a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.5A2.5 2.5 0 0 0 10.5 7" />
  </svg>
);
export default SvgExtinguisher;