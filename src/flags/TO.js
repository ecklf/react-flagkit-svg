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
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TO_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TO_svg_prefix__b"
        >
          <stop stopColor="#E20F1B" offset="0%" />
          <stop stopColor="#C00711" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TO_svg_prefix__c"
        >
          <stop stopColor="#DF101B" offset="0%" />
          <stop stopColor="#C00711" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TO_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#TO_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#TO_svg_prefix__a)" d="M0 0h12v8H0z" />
        <path
          d="M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 005 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 003.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 007 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 008.742 3H7z"
          fill="url(#TO_svg_prefix__c)"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
