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
          id="SS_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_prefix__b"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_prefix__c"
        >
          <stop stopColor="#E22A32" offset="0%" />
          <stop stopColor="#D61C24" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_prefix__d"
        >
          <stop stopColor="#2CA244" offset="0%" />
          <stop stopColor="#218736" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_prefix__e"
        >
          <stop stopColor="#185AC6" offset="0%" />
          <stop stopColor="#104CAD" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_prefix__f"
        >
          <stop stopColor="#FDE14A" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SS_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SS_svg_prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#SS_svg_prefix__c)" d="M0 5h21v5H0z" />
        <path fill="url(#SS_svg_prefix__a)" d="M0 4h21v1H0z" />
        <path fill="url(#SS_svg_prefix__d)" d="M0 11h21v4H0z" />
        <path fill="url(#SS_svg_prefix__a)" d="M0 10h21v1H0z" />
        <path fill="url(#SS_svg_prefix__e)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#SS_svg_prefix__f)"
          d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
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
