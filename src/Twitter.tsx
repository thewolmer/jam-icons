import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20 1.907a8.3 8.3 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.4 8.4 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04q0 .476.106.92A11.7 11.7 0 0 1 1.393.754a3.96 3.96 0 0 0-.554 2.03 4.02 4.02 0 0 0 1.824 3.363A4.15 4.15 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.2 4.2 0 0 1-1.08.141q-.397 0-.773-.075a4.1 4.1 0 0 0 3.832 2.807 8.3 8.3 0 0 1-5.095 1.727q-.498-.001-.979-.056a11.73 11.73 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.1 8.1 0 0 0 20 1.907" />
  </svg>
);
export default SvgTwitter;