import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCutter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m11.37 15.226.023-.027-4.617-3.832-.002.003zm-1.286 1.533-2.58 3.074-7.158-.803 5.142-6.128zM7.02 14.187 4.722 12.26 13.72 1.534a4 4 0 0 1 6.128 5.143L10.85 17.4l-2.298-1.928-1.928 2.298-2.175-.52 2.571-3.064zm.52-2.174 3.064 2.57 7.713-9.192a2 2 0 0 0-3.064-2.571zm9.245-7.907a1 1 0 0 1 .123 1.408l-.642.766a1 1 0 1 1-1.533-1.285l.643-.766a1 1 0 0 1 1.41-.123z" />
  </svg>
);
export default SvgCutter;
