import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMedal = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4 14.517-.612-1.258a1 1 0 0 0-.43-.447l-2-1.06a1 1 0 0 1-.485-1.181l.71-2.273a1 1 0 0 0 0-.596l-.71-2.273a1 1 0 0 1 .486-1.182l1.999-1.06a1 1 0 0 0 .43-.446L4.393.674A1 1 0 0 1 5.615.165l2.062.703a1 1 0 0 0 .646 0l2.062-.703a1 1 0 0 1 1.222.51l1.005 2.066a1 1 0 0 0 .43.447l2 1.06a1 1 0 0 1 .485 1.181l-.71 2.273a1 1 0 0 0 0 .596l.71 2.273a1 1 0 0 1-.486 1.182l-1.999 1.06a1 1 0 0 0-.43.446L12 14.517v6.879l-4-1.358-4 1.358zm2 1.187v2.9l2-.679 2 .68v-2.901l-1.677-.572a1 1 0 0 0-.646 0zm4.813-3.32a3 3 0 0 1 1.293-1.339l1.264-.67-.462-1.48a3 3 0 0 1 0-1.79l.462-1.48-1.264-.67a3 3 0 0 1-1.293-1.34l-.619-1.272-1.226.418a3 3 0 0 1-1.936 0l-1.226-.418-.619 1.273a3 3 0 0 1-1.293 1.339l-1.264.67.462 1.48a3 3 0 0 1 0 1.79l-.462 1.48 1.264.67a3 3 0 0 1 1.293 1.34l.619 1.272 1.226-.418a3 3 0 0 1 1.936 0l1.226.418zM8 5a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgMedal;
