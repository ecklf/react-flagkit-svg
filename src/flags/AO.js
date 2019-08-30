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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg_prefix__b">
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg_prefix__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg_prefix__d">
          <stop stopColor="#DD2137" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg_prefix__e">
          <stop stopColor="#F8D84B" offset="0%" />
          <stop stopColor="#F9D536" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#AO_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#AO_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#AO_svg_prefix__c)" d="M0 8h21v7H0z" />
        <path fill="url(#AO_svg_prefix__d)" d="M0 0h21v8H0z" />
        <path
          d="M10.63 8.855l-1.407-.939a.5.5 0 01.554-.832l1.536 1.024a2 2 0 00-1.253-2.863.5.5 0 11.259-.966 3 3 0 011.83 4.386l.628.419a.5.5 0 01-.554.832l-.713-.475c-.727.631-1.744.901-2.744.633a.5.5 0 01.259-.966c.57.153 1.147.044 1.606-.253zM9.5 6.5a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#AO_svg_prefix__e)"
          fillRule="nonzero"
        />
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
