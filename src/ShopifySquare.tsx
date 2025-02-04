import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShopifySquare = ({
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
    <path d="m13.264 6.833-.805-.06-.592-.589.592.59s.77.056.805.06c.037.002.08.03.088.08l1.091 7.385-3.09.668L5.65 13.9s.732-5.66.76-5.86c.036-.264.045-.273.325-.36l.902-.28c.194-.82.81-2.432 2.1-2.432.168 0 .363.09.52.299l.047-.002c.554 0 .868.472 1.047.985l.299-.092a.3.3 0 0 1 .135-.01zm-2.96 1.708s-.257-.15-.779-.15c-1.353 0-2.023.904-2.023 1.838 0 1.11 1.107 1.14 1.107 1.815a.383.383 0 0 1-.4.386c-.434 0-.948-.441-.948-.441l-.262.866s.5.609 1.48.609c.815 0 1.42-.614 1.42-1.568 0-1.213-1.35-1.411-1.35-1.929 0-.095.031-.471.631-.471.41 0 .743.178.743.178zm.732-2.195c-.123-.373-.313-.698-.598-.733.071.203.115.46.115.779v.104zm-.952-.67c-.314.135-.674.492-.866 1.233l.997-.308v-.056c0-.385-.052-.67-.13-.87zm-.383-.363c-.926 0-1.447 1.216-1.666 1.962l.788-.244c.187-.978.63-1.468 1.043-1.662a.3.3 0 0 0-.165-.056" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgShopifySquare;
