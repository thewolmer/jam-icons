import * as React from "react";
const SvgUnsplashSquare = ({ title, titleId, ...props }) => (
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
    <path d="M11.596 10.72c0 .867-.687 1.542-1.5 1.542s-1.5-.675-1.5-1.543.688-1.543 1.5-1.543c.844.032 1.5.707 1.5 1.543zm3.5-2.38v4.79c0 .74-.593 1.382-1.343 1.382H6.44c-.75 0-1.344-.61-1.344-1.382V8.308c0-.739.594-1.382 1.344-1.382h1.156l.25-.739c.125-.354.532-.643.907-.643h2.687c.375 0 .781.29.906.643l.25.771h1.157c.75 0 1.343.611 1.343 1.383zm-2.687 2.411c0-1.318-1.031-2.41-2.344-2.41-1.281 0-2.344 1.092-2.344 2.41s1.032 2.411 2.344 2.411a2.395 2.395 0 0 0 2.344-2.41z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgUnsplashSquare;
