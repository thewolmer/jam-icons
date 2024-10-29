import * as React from "react";
const SvgBellOff = ({ title, titleId, ...props }) => (
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
    <path d="M13 18a3 3 0 0 1-6 0H4.657l2-2H16.71a7 7 0 0 0-2.044-3.218L14 12.186v-3.53l1.99-1.99Q16 6.832 16 7v4.292A8.98 8.98 0 0 1 19 18zM1.295 15.705A9 9 0 0 1 4 11.292V7a6 6 0 0 1 10.243-4.243l-1.415 1.415A4 4 0 0 0 6 7v4zM10 19a1 1 0 0 0 1-1H9a1 1 0 0 0 1 1M19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z" />
  </svg>
);
export default SvgBellOff;
