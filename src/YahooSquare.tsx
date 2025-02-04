import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYahooSquare = ({
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
    <path d="M13.055 8.483c-.245.066-2.484 1.802-2.631 2.228-.033.148.003 1.574.036 1.788.147.033 1.212.005 1.408.037l-.024.441c-.191-.015-1.545-.011-2.317-.011-.392 0-1.654.043-2.041.032l.073-.42c.213-.015 1.093.04 1.285-.166.096-.102.066-1.458.034-1.688-.082-.245-2.044-2.703-2.557-3.106H5V7h4.457v.043l.015.001-.015.105v.469H8.113c.599.876 1.457 1.933 1.824 2.441l1.795-1.626h-1.067l-.15-.618h3.908l-.03.044.015.001-.28.405-.008.001-.113.167h-.721c-.093.02-.175.039-.231.05m1.275 3.87-.345-.016-.385-.047.004.66.303.026.327.024zM15 9.2a28 28 0 0 1-1.313-.131l.017 2.788.599.048z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgYahooSquare;
