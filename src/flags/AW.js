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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AW_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AW_svg_prefix__b">
          <stop stopColor="#5098EA" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AW_svg_prefix__c">
          <stop stopColor="#E82045" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#AW_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#AW_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M1.803 4.96a.5.5 0 010-.92l1.566-.67.671-1.567a.5.5 0 01.92 0l.67 1.566 1.567.671a.5.5 0 010 .92l-1.566.67-.671 1.567a.5.5 0 01-.92 0l-.67-1.566-1.567-.671z"
          fill="url(#AW_svg_prefix__a)"
          fillRule="nonzero"
        />
        <path
          fill="url(#AW_svg_prefix__c)"
          d="M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z"
        />
        <path fill="#F9D536" d="M0 11h21v1H0zM0 9h21v1H0z" />
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
