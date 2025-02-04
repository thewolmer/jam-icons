import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeOpenF = ({
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
    <path d="m19.25 5.52-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56q.095-.082.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872q.081.053.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0z" />
  </svg>
);
export default SvgEnvelopeOpenF;
