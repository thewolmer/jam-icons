import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFastBackwardSquare = ({
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.08 9.6V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.509l2.516-2.842c.377-.426.9-.667 1.447-.667.866 0 1.604.594 1.882 1.425l.671-.758c.377-.426.9-.667 1.447-.667 1.104 0 2 .965 2 2.156v5.688c0 .575-.213 1.125-.591 1.53a1.9 1.9 0 0 1-2.829-.011l-.706-.767c-.1.29-.258.556-.465.778a1.9 1.9 0 0 1-2.829-.011zm7.963 1.244V7.156L11.906 9.57l-.004.948zm-4 0V7.156l-2.567 2.9z" />
  </svg>
);
export default SvgFastBackwardSquare;