import React from "react";
import PropTypes from "prop-types";

const JE = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#EF273F" offset="0%" />
          <stop stop-color="#DB1C33" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#F22A41" offset="0%" />
          <stop stop-color="#E51D34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#FADF46" offset="0%" />
          <stop stop-color="#F9DC38" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path
          d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
          fill="url(#b)"
        />
        <path
          d="M9 2.502c0-.279.216-.505.496-.505h2.009c.273 0 .495.214.495.505v.99c0 .28-.16.666-.348.853l-.804.804a.496.496 0 01-.696 0l-.804-.804A1.354 1.354 0 019 3.493v-.991z"
          fill="url(#c)"
        />
        <path
          d="M10.5 3.997a.5.5 0 110-1 .5.5 0 010 1zm0-2c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5c.829 0 1.5.224 1.5.5s-.671.5-1.5.5z"
          fill="url(#d)"
        />
      </g>
    </svg>
  );
};

JE.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

JE.propTypes = {
  width: "21",
  height: "15",
};

export default JE;
