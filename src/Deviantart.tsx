import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeviantart = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.985 0H8.846L7.141 3.211a1.2 1.2 0 0 1-1.066.631H.033v5.1h3.27c.362 0 .596.373.43.686l-3.7 6.967v3.375h4.131l1.706-3.21a1.2 1.2 0 0 1 1.066-.632h6.049v-5.1H9.707a.47.47 0 0 1-.43-.686l3.708-6.98z" />
  </svg>
);
export default SvgDeviantart;