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
          id="CD_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CD_svg_prefix__b"
        >
          <stop stopColor="#158AFF" offset="0%" />
          <stop stopColor="#007FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CD_svg_prefix__c"
        >
          <stop stopColor="#CE1120" offset="0%" />
          <stop stopColor="#E11B2B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CD_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#CD_svg_prefix__b)"
          d="M4.294 1.443h21v15h-21z"
          transform="translate(-4.29 -1.44)"
        />
        <path
          fill="#FDD216"
          d="M24.273 3.906l-25.84 13.166-2.723-5.346L21.55-1.44z"
        />
        <path
          fill="url(#CD_svg_prefix__c)"
          transform="rotate(153 12.585 7.839)"
          d="M.057 7.074h29v4h-29z"
        />
        <path
          fill="#FDD216"
          d="M3.504 4.478l-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z"
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
