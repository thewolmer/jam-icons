import * as React from "react";
const SvgAndroidSquare = ({ title, titleId, ...props }) => (
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
    <path d="M6.39 8.248h-.026a.6.6 0 0 0-.596.596v2.594c0 .329.267.596.596.596h.026a.6.6 0 0 0 .596-.596V8.844a.6.6 0 0 0-.597-.596zm.88 4.192c0 .3.247.546.548.546h.586v1.402c0 .329.268.596.596.596h.025a.6.6 0 0 0 .597-.596v-1.402h.818v1.402c0 .329.27.596.596.596h.026a.6.6 0 0 0 .596-.596v-1.402h.586c.3 0 .547-.245.547-.547V8.343H7.27zm4.136-6.581.465-.718a.099.099 0 1 0-.166-.108l-.482.743a3.1 3.1 0 0 0-1.192-.232c-.427 0-.83.084-1.192.232l-.481-.743a.1.1 0 0 0-.137-.029.1.1 0 0 0-.03.137l.466.718c-.839.41-1.405 1.185-1.405 2.074q0 .082.009.162h5.541q.008-.08.008-.162c0-.889-.566-1.663-1.404-2.074m-2.66 1.284a.266.266 0 1 1 0-.532.266.266 0 0 1 0 .532m2.57 0a.266.266 0 1 1-.001-.532.266.266 0 0 1 0 .532zm2.382 1.105h-.025a.6.6 0 0 0-.597.596v2.594c0 .329.27.596.597.596h.025a.597.597 0 0 0 .596-.596V8.844a.6.6 0 0 0-.596-.596" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgAndroidSquare;
