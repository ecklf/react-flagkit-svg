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
          id="SB_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SB_svg_prefix__b"
        >
          <stop stopColor="#1DBE4F" offset="0%" />
          <stop stopColor="#159B3F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SB_svg_prefix__c"
        >
          <stop stopColor="#0660D4" offset="0%" />
          <stop stopColor="#0051BB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SB_svg_prefix__d"
        >
          <stop stopColor="#2C7442" offset="0%" />
          <stop stopColor="#225B34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SB_svg_prefix__e"
        >
          <stop stopColor="#FFD646" offset="0%" />
          <stop stopColor="#FED02F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SB_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path
          d="M5.92 5.812c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138a.69.69 0 01-.18-.433v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536a.459.459 0 01.364-.232h1.004c.137 0 .248.116.248.25 0 .138-.107.25-.252.25h-.496a.254.254 0 00-.252.25c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51a.245.245 0 01-.252.245h-.496a.249.249 0 01-.252-.252v-.496c0-.139.116-.252.25-.252.138 0 .25-.116.25-.25a.247.247 0 00-.252-.25h-.496a.255.255 0 00-.252.248v1.004a.251.251 0 01-.25.248.247.247 0 01-.25-.252v-.496a.254.254 0 00-.25-.252.247.247 0 00-.25.252v.496c0 .139-.116.252-.25.252a.247.247 0 01-.25-.252v-.496z"
          fill="url(#SB_svg_prefix__a)"
        />
        <path fill="url(#SB_svg_prefix__b)" d="M0-.003h21v15H0z" />
        <path fill="url(#SB_svg_prefix__c)" d="M0-.003h21l-21 15z" />
        <path
          fill="url(#SB_svg_prefix__d)"
          transform="matrix(-1 0 0 1 21 0)"
          d="M0-.003l21 15H0z"
        />
        <path fill="url(#SB_svg_prefix__e)" d="M-4 6.497h29v2H-4z" />
        <path
          d="M2.25 2.872l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm5 0l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm0 3l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm-5 0l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm2.5-1.5l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387z"
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
