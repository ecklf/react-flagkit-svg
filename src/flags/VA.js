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
          id="VA_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_prefix__b"
        >
          <stop stopColor="#FDE048" offset="0%" />
          <stop stopColor="#FFDF32" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_prefix__c"
        >
          <stop stopColor="#CDCCCC" offset="0%" />
          <stop stopColor="#E4E4E4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_prefix__d"
        >
          <stop stopColor="#CD9D25" offset="0%" />
          <stop stopColor="#EBB93A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_prefix__e"
        >
          <stop stopColor="#F5252C" offset="0%" />
          <stop stopColor="#F6151C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#VA_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#VA_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#VA_svg_prefix__a)" d="M10 0h11v15H10z" />
        <path
          d="M18.682 8.025a1.5 1.5 0 10-2.415-.414l-2.181 2.182-.354-.354-.353-.353-.707.707.353.353.707.708.354.353.353-.353 2.536-2.536a1.5 1.5 0 001.707-.293z"
          fill="url(#VA_svg_prefix__c)"
          transform="matrix(1 0 0 -1 0 16.672)"
        />
        <path
          d="M14.025 8.318a1.5 1.5 0 11.708-.707l2.181 2.182.354-.354.353-.353.707.707-.353.353-.707.708-.354.353-.353-.353-2.536-2.536z"
          fill="url(#VA_svg_prefix__d)"
          transform="matrix(1 0 0 -1 0 16.672)"
        />
        <path
          d="M15.5 5c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5 1.5.224 1.5.5-.672.5-1.5.5zm0-2.5c-.414 0-.75-.112-.75-.25s.336-.25.75-.25.75.112.75.25-.336.25-.75.25zm0 1.167c-.552 0-1-.15-1-.334 0-.184.448-.333 1-.333s1 .15 1 .333c0 .184-.448.334-1 .334z"
          fill="url(#VA_svg_prefix__d)"
        />
        <path
          d="M13.026 10.658c.08.242.247.576.527.912.48.576 1.13.93 1.947.93.817 0 1.467-.354 1.947-.93.28-.336.447-.67.527-.912a.5.5 0 10-.948-.316 1.98 1.98 0 01-.348.588c-.301.362-.683.57-1.178.57-.495 0-.877-.208-1.178-.57a1.98 1.98 0 01-.348-.588.5.5 0 10-.948.316z"
          fill="url(#VA_svg_prefix__e)"
          fillRule="nonzero"
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
