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
          id="GI_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_prefix__b"
        >
          <stop stopColor="#E71924" offset="0%" />
          <stop stopColor="#D6101B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_prefix__c"
        >
          <stop stopColor="#EA1824" offset="0%" />
          <stop stopColor="#D6101B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_prefix__d"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_prefix__e"
        >
          <stop stopColor="#ECCE3E" offset="0%" />
          <stop stopColor="#D9BC2D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GI_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#GI_svg_prefix__a)" d="M0 0h21v10H0z" />
        <path fill="url(#GI_svg_prefix__b)" d="M0 10h21v5H0z" />
        <path
          d="M9 6H8V4.49A.495.495 0 007.495 4h-.99A.49.49 0 006 4.49V8L5 9h11l-1-1V4.49a.495.495 0 00-.505-.49h-.99a.49.49 0 00-.505.49V6h-1V3.49a.49.49 0 00-.495-.49h-2.01A.49.49 0 009 3.49V6z"
          fill="url(#GI_svg_prefix__c)"
        />
        <path
          d="M7 8a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1zm3.5 2a.5.5 0 110-1 .5.5 0 010 1zm0-3a.5.5 0 110-1 .5.5 0 010 1zM14 8a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#GI_svg_prefix__d)"
        />
        <path
          d="M10 9.943V12H9v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S9 8.448 9 9c0 .435.417.806 1 .943z"
          fill="url(#GI_svg_prefix__e)"
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
