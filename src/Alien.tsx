import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlien = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 20c-4.5 0-9-6.03-9-11a9 9 0 1 1 18 0c0 4.97-4.5 11-9 11m0-2c3.14 0 7-4.869 7-9A7 7 0 0 0 2 9c0 4.131 3.86 9 7 9m-1.974-4.18c-.529.192-2.339-.579-2.905-2.136-.567-1.557.347-3.319.853-3.503s2.339.578 2.905 2.135c.567 1.557-.324 3.31-.853 3.503zm3.948 0c-.529-.193-1.42-1.947-.853-3.504.566-1.557 2.399-2.32 2.905-2.135.506.184 1.42 1.946.853 3.503-.566 1.557-2.376 2.328-2.905 2.135z" />
  </svg>
);
export default SvgAlien;
