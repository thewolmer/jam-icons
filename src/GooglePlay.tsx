import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGooglePlay = ({
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
    <path d="m17.625 9.267-3.635-2.1L11 10.061l2.733 2.644 3.892-2.25a.68.68 0 0 0 .342-.593.68.68 0 0 0-.342-.595M13.373 6.81l-4-2.312L.607 0l9.901 9.584zM.752 19.98l8.636-4.763 3.728-2.155-2.608-2.524zM.022.388l-.01 19.355 10.003-9.682z" />
  </svg>
);
export default SvgGooglePlay;
