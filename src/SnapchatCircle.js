import * as React from "react";
const SvgSnapchatCircle = ({ title, titleId, ...props }) => (
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M14.804 12.292c-1.337-.22-1.94-1.59-1.964-1.647q-.11-.223-.052-.352c.073-.171.353-.26.538-.318a3 3 0 0 0 .146-.05 1.1 1.1 0 0 0 .399-.238.38.38 0 0 0 .121-.273c-.003-.16-.126-.302-.321-.371A.6.6 0 0 0 13.453 9a.5.5 0 0 0-.202.042 1.1 1.1 0 0 1-.417.118.4.4 0 0 1-.138-.03l.012-.193.002-.029c.043-.676.096-1.518-.128-2.018a2.7 2.7 0 0 0-.612-.876 2.6 2.6 0 0 0-.732-.483 2.9 2.9 0 0 0-1.142-.24l-.197.001a2.9 2.9 0 0 0-1.143.241 2.6 2.6 0 0 0-.73.482 2.7 2.7 0 0 0-.609.874c-.223.5-.17 1.341-.128 2.018l.014.223a.4.4 0 0 1-.164.03q-.19 0-.445-.119a.4.4 0 0 0-.17-.035.6.6 0 0 0-.3.084.41.41 0 0 0-.211.27c-.013.07-.013.21.142.351q.13.117.373.213.065.025.146.05c.185.058.466.147.539.318q.055.132-.048.34c-.022.052-.181.41-.508.79a2.8 2.8 0 0 1-.608.537 2.2 2.2 0 0 1-.853.331.233.233 0 0 0-.196.244q.003.053.025.102.07.168.339.29.332.154.978.255c.022.04.044.144.06.215q.023.112.057.234c.026.089.094.195.268.195.067 0 .142-.015.23-.032.13-.025.305-.06.525-.06q.184 0 .375.033c.245.04.456.189.7.361.358.253.763.539 1.382.539l.05-.002.072.002c.619 0 1.024-.286 1.382-.538.245-.172.456-.321.7-.362a2.3 2.3 0 0 1 .9.024q.144.028.23.028c.139 0 .233-.07.268-.192q.034-.118.058-.232c.014-.067.038-.173.06-.214q.645-.102.977-.254c.18-.084.29-.178.339-.29a.3.3 0 0 0 .025-.102.233.233 0 0 0-.196-.243z" />
  </svg>
);
export default SvgSnapchatCircle;