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
          id="UY_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UY_svg_prefix__b"
        >
          <stop stopColor="#0E4DC5" offset="0%" />
          <stop stopColor="#073DA6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UY_svg_prefix__c"
        >
          <stop stopColor="#FED443" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#UY_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#UY_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M10 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2zM0 0h10v10H0V0z"
          fill="url(#UY_svg_prefix__a)"
        />
        <path
          d="M5 6.991l-.668.996L4.163 6.8l-1.033.608.362-1.143-1.195.1.823-.873L2 5.062l1.12-.428-.823-.873 1.195.1-.362-1.144 1.033.608.17-1.187.667.996.668-.996.169 1.187 1.033-.608-.362 1.143 1.195-.099-.823.873L8 5.063l-1.12.429.823.872-1.195-.099.362 1.143L5.837 6.8l-.17 1.187L5 6.991zm0-.02a1.91 1.91 0 100-3.817 1.91 1.91 0 000 3.818zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
          fill="url(#UY_svg_prefix__c)"
        />
        <path
          d="M4.125 5a.125.125 0 01.25 0A.622.622 0 005 5.625c.243 0 .46-.14.564-.355l.038-.07.014-.023c.048-.08.062-.119.062-.177a.125.125 0 01.25 0 .534.534 0 01-.097.304l-.013.022-.028.052A.875.875 0 014.125 5zM5.5 4.75a.25.25 0 110-.5.25.25 0 010 .5zm-1 0a.25.25 0 110-.5.25.25 0 010 .5z"
          fill="#C6A326"
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
