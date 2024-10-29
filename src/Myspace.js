import * as React from "react";
const SvgMyspace = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <ellipse cx={2.835} cy={4.885} rx={2.576} ry={2.55} />
    <path d="M2.8 8.102C1.24 8.121 0 9.41 0 10.954v.718c0 .166.136.3.304.3h5.063a.303.303 0 0 0 .304-.3v-.763c0-1.562-1.289-2.826-2.87-2.807z" />
    <ellipse cx={9.361} cy={4.303} rx={2.788} ry={2.76} />
    <path d="M9.323 7.784c-1.688.02-3.03 1.415-3.03 3.086v.802a.3.3 0 0 0 .303.3h5.529a.303.303 0 0 0 .304-.3v-.85c0-1.69-1.394-3.058-3.106-3.038m7.163-1.434c1.763 0 3.193-1.416 3.193-3.162S18.249.027 16.486.027s-3.193 1.415-3.193 3.161 1.43 3.162 3.193 3.162m0 .825c-1.94 0-3.514 1.558-3.514 3.48v1.017c0 .166.136.3.304.3h6.42a.303.303 0 0 0 .304-.3v-1.018c0-1.921-1.573-3.479-3.514-3.479" />
  </svg>
);
export default SvgMyspace;
