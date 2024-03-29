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
          id="LS_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_prefix__b"
        >
          <stop stopColor="#0C33B8" offset="0%" />
          <stop stopColor="#05279D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_prefix__c"
        >
          <stop stopColor="#1DB158" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_prefix__d"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#LS_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#LS_svg_prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#LS_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#LS_svg_prefix__a)" d="M0 5h21v5H0z" />
        <path
          d="M10 7.5l.342-1.025c.087-.263.228-.266.316 0L11 7.5l.861 1.291c.077.116.057.279-.055.356 0 0-.306.353-1.306.353s-1.306-.353-1.306-.353a.27.27 0 01-.055-.356L10 7.5z"
          fill="url(#LS_svg_prefix__d)"
        />
        <path
          d="M10.5 7.5a1 1 0 110-2 1 1 0 010 2zm0 0c.276 0 .5-.724.5-1a.5.5 0 10-1 0c0 .276.224 1 .5 1z"
          fill="#242424"
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
