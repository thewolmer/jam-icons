import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessagesAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d="m7.403 14.026.64-.11q.186-.032.443-.098C10.6 13.288 12 11.708 12 10c0-2.135-2.176-4-5-4s-5 1.865-5 4c0 1.218.702 2.378 1.931 3.15l.036.02L5 13.74v2.763zm.982 1.86-3.667 3.78A1 1 0 0 1 3 18.97v-4.05a3 3 0 0 1-.132-.076C1.129 13.752 0 11.989 0 10c0-3.314 3.134-6 7-6s7 2.686 7 6c0 2.726-2.121 5.028-5.026 5.758a8 8 0 0 1-.589.128M6.936 3C8.146 1.207 10.41 0 13 0c3.866 0 7 2.686 7 6 0 1.989-1.13 3.752-2.868 4.844a3 3 0 0 1-.132.076v4.05a1 1 0 0 1-1.718.696l-1.735-1.788 1.043-1.798.41.423V9.74l1.033-.57.036-.02C17.299 8.378 18 7.218 18 6c0-2.135-2.176-4-5-4-1.28 0-2.426.383-3.297 1z" />
  </svg>
);
export default SvgMessagesAlt;
