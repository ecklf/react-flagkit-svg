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
          id="GU_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__b"
        >
          <stop stopColor="#DE3149" offset="0%" />
          <stop stopColor="#C2273D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__c"
        >
          <stop stopColor="#053B94" offset="0%" />
          <stop stopColor="#002E7A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__d"
        >
          <stop stopColor="#DE3149" offset="0%" />
          <stop stopColor="#C2273D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__f"
        >
          <stop stopColor="#81C1F3" offset="0%" />
          <stop stopColor="#6AB1E9" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__h"
        >
          <stop stopColor="#27A07E" offset="0%" />
          <stop stopColor="#1F9171" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__i"
        >
          <stop stopColor="#1E8CE8" offset="0%" />
          <stop stopColor="#107FDC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__j"
        >
          <stop stopColor="#FFF048" offset="0%" />
          <stop stopColor="#FFEF36" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GU_svg_prefix__k"
        >
          <stop stopColor="#8F5715" offset="0%" />
          <stop stopColor="#7A480D" offset="100%" />
        </linearGradient>
        <path
          d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z"
          id="GU_svg_prefix__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GU_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#GU_svg_prefix__b)" d="M0 0h21v15H0z" />
        <rect
          fill="url(#GU_svg_prefix__c)"
          x={1}
          y={1}
          width={19}
          height={13}
          rx={0.75}
        />
        <path
          d="M10.5 12s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5z"
          fill="url(#GU_svg_prefix__d)"
        />
        <g transform="translate(8 3)">
          <mask id="GU_svg_prefix__g" fill="#fff">
            <use xlinkHref="#GU_svg_prefix__e" />
          </mask>
          <use fill="url(#GU_svg_prefix__a)" xlinkHref="#GU_svg_prefix__e" />
          <path
            fill="url(#GU_svg_prefix__f)"
            mask="url(#GU_svg_prefix__g)"
            d="M0 0h5v5H0z"
          />
          <path
            fill="url(#GU_svg_prefix__h)"
            mask="url(#GU_svg_prefix__g)"
            d="M2.5 4.1l-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z"
          />
          <path
            fill="url(#GU_svg_prefix__i)"
            mask="url(#GU_svg_prefix__g)"
            d="M0 5h5v4H0z"
          />
          <path
            d="M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0V6z"
            fill="url(#GU_svg_prefix__j)"
            mask="url(#GU_svg_prefix__g)"
          />
        </g>
        <path
          d="M10.251 6.475a14.974 14.974 0 00-.067 1.084c-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 00.246-.436 3.148 3.148 0 01-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85a13.917 13.917 0 01.065-1.046.25.25 0 10-.498-.05z"
          fill="url(#GU_svg_prefix__k)"
          fillRule="nonzero"
        />
        <path fill="#FFF" d="M9 7.5L10 9H9z" />
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
