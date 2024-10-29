import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOdnoklassnikiSquare = ({
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
    <path d="M9.53 11.996c-.77-.081-1.463-.272-2.057-.74-.074-.058-.15-.114-.217-.18-.26-.25-.287-.539-.08-.835.175-.254.47-.322.778-.177a1 1 0 0 1 .17.102c1.107.766 2.628.787 3.74.034a1 1 0 0 1 .363-.19.57.57 0 0 1 .655.264c.163.267.16.527-.04.734a3 3 0 0 1-1.087.708c-.388.152-.814.228-1.235.279.064.07.094.104.134.144q.858.865 1.715 1.734c.194.198.235.443.128.673-.117.25-.379.416-.635.398a.62.62 0 0 1-.402-.207c-.431-.437-.87-.866-1.293-1.311-.123-.13-.183-.105-.291.007q-.652.674-1.319 1.334c-.199.197-.436.233-.667.12a.68.68 0 0 1-.39-.626.63.63 0 0 1 .21-.42l1.694-1.709c.037-.038.072-.078.126-.136" />
    <path d="M9.988 10a2.503 2.503 0 0 1-2.481-2.506A2.506 2.506 0 0 1 10.018 5a2.503 2.503 0 0 1 2.489 2.532C12.5 8.898 11.37 10.005 9.988 10m1.244-2.502a1.22 1.22 0 0 0-1.224-1.221 1.22 1.22 0 0 0-1.226 1.235 1.22 1.22 0 0 0 1.233 1.212 1.216 1.216 0 0 0 1.217-1.226" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgOdnoklassnikiSquare;