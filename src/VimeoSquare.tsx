import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVimeoSquare = ({
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
    <path d="M14.586 6.216c-.242-.264-.593-.404-1.042-.417-1.267-.042-2.164.64-2.664 2.024a.21.21 0 0 0 .042.21.2.2 0 0 0 .203.06q.216-.06.424-.06c.185 0 .43.034.553.197q.141.19.038.56c-.058.207-.357.761-.726 1.348-.45.715-.7 1.035-.77 1.035-.238 0-1.097-3.845-1.12-3.93-.247-.88-.37-1.323-1.17-1.323-.611 0-1.972 1.126-3.09 2.107l-.17.15a.27.27 0 0 0-.038.368l.208.271a.264.264 0 0 0 .365.055l.011-.009c.362-.26.703-.505.961-.518.28-.014.523.428.813 1.48.552 2.044 1.39 4.48 2.251 4.48.9 0 1.973-.77 3.36-2.594 1.255-1.65 1.927-2.959 1.97-3.911.033-.72-.105-1.252-.409-1.583" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgVimeoSquare;
