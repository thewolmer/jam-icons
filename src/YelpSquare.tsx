import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYelpSquare = ({
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
    <path d="m9.2 12.095-1.382 1.682a.45.45 0 0 0 .183.707l1.351.531a.45.45 0 0 0 .616-.408l.059-2.203a.467.467 0 0 0-.828-.309zm-.23-1.672-2.05-.736a.45.45 0 0 0-.603.41l-.046 1.451c-.01.313.294.54.591.443l2.095-.685a.467.467 0 0 0 .013-.883m2.348.236 2.099-.579a.45.45 0 0 0 .257-.683l-.797-1.213a.45.45 0 0 0-.74-.021L10.82 9.93a.467.467 0 0 0 .498.729m-1.52-5.043a.535.535 0 0 0-.676-.541l-1.661.453a.535.535 0 0 0-.296.826L9.07 9.656a.5.5 0 0 0 .053.077.555.555 0 0 0 .943-.18.6.6 0 0 0 .024-.217zm3.633 6.552-2.107-.647a.467.467 0 0 0-.52.715l1.25 1.782c.177.25.546.257.73.012l.875-1.158a.45.45 0 0 0-.228-.704" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgYelpSquare;
