import * as React from "react";
const SvgFastForwardSquareF = ({ title, titleId, ...props }) => (
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
    <path d="m14.043 8.509-2.516-2.842A1.93 1.93 0 0 0 10.08 5c-.867 0-1.604.594-1.882 1.425l-.671-.758A1.93 1.93 0 0 0 6.08 5c-1.104 0-2 .965-2 2.156v5.688c0 .575.213 1.125.591 1.53a1.9 1.9 0 0 0 2.829-.011l.706-.767c.1.29.258.556.465.778a1.9 1.9 0 0 0 2.829-.011l2.543-2.762V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1.973 12.93V7.242L8.11 9.656l.004.948zm4.03-.055V7.187l2.567 2.9z" />
  </svg>
);
export default SvgFastForwardSquareF;