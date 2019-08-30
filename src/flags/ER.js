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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg_prefix__b">
          <stop stopColor="#29C53F" offset="0%" />
          <stop stopColor="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg_prefix__c">
          <stop stopColor="#579DED" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg_prefix__d">
          <stop stopColor="#F42D56" offset="0%" />
          <stop stopColor="#E9103D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ER_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#ER_svg_prefix__b)" d="M0 0h21v7.5H0z" />
        <path fill="url(#ER_svg_prefix__c)" d="M0 7.5h21v8H0z" />
        <path fill="url(#ER_svg_prefix__d)" d="M0 15l21-7.5L0 0z" />
        <path
          d="M6.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
          fill="#FFC63C"
          fillRule="nonzero"
        />
        <circle fill="#FFC63C" cx={6} cy={6.5} r={1} />
        <circle fill="#FFC63C" cx={7} cy={7} r={1} />
        <circle fill="#FFC63C" cx={6.5} cy={6} r={1} />
        <circle fill="#FFC63C" cx={6} cy={7.5} r={1} />
        <circle fill="#FFC63C" cx={7} cy={8} r={1} />
        <circle fill="#FFC63C" cx={6} cy={8.5} r={1} />
        <circle fill="#FFC63C" cx={7} cy={9} r={1} />
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
