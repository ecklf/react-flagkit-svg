import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GBSCT_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GBSCT_svg_prefix__b">
          <stop stopColor="#1479D0" offset="0%" />
          <stop stopColor="#0A68BA" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GBSCT_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#GBSCT_svg_prefix__b)" d="M0-.003h21v15H0z" />
        <path
          d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
          fill="url(#GBSCT_svg_prefix__a)"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15"
};
export default SvgComponent;
