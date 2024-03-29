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
          id="TF_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TF_svg_prefix__b"
        >
          <stop stopColor="#073AB6" offset="0%" />
          <stop stopColor="#002B93" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TF_svg_prefix__c"
        >
          <stop stopColor="#F44653" offset="0%" />
          <stop stopColor="#EE2A39" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TF_svg_prefix__d"
        >
          <stop stopColor="#1035BB" offset="0%" />
          <stop stopColor="#042396" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TF_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#TF_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M0 0h9.5v7.25c0 .138-.107.25-.254.25H0V0z"
          fill="url(#TF_svg_prefix__a)"
        />
        <path fill="url(#TF_svg_prefix__c)" d="M6 0h3v7H6z" />
        <path fill="url(#TF_svg_prefix__d)" d="M0 0h3v7H0z" />
        <path fill="url(#TF_svg_prefix__a)" d="M3 0h3v7H3z" />
        <path
          d="M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5L13 6zm4 2.5l1 1.5h-2l1-1.5zm-3 0l1 1.5h-2l1-1.5zm1.5 3l-1-1.5h2l-1 1.5zm3-3.5a.5.5 0 110-1 .5.5 0 010 1zm-6 0a.5.5 0 110-1 .5.5 0 010 1zm1 4a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1zm-2 1a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#FFF"
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
