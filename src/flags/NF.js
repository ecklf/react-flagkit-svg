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
          id="NF_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NF_svg_prefix__b"
        >
          <stop stopColor="#219646" offset="0%" />
          <stop stopColor="#197837" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NF_svg_prefix__c"
        >
          <stop stopColor="#259D4B" offset="0%" />
          <stop stopColor="#197837" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#NF_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#NF_svg_prefix__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
        <path fill="url(#NF_svg_prefix__a)" d="M6 0h9v15H6z" />
        <path
          d="M9.444 4.003l.422-1.52A.705.705 0 0110.5 2c.276 0 .562.222.634.484l.422 1.52a.5.5 0 10.248.893l.31 1.116a.501.501 0 00-.614.487.5.5 0 00.85.358l.325 1.174a.499.499 0 10.217.779L13.5 11H11v2h-1v-2H7.5l.608-2.19a.5.5 0 10.217-.778l.326-1.174A.498.498 0 009.5 6.5a.5.5 0 00-.615-.487l.31-1.116a.5.5 0 10.248-.893z"
          fill="url(#NF_svg_prefix__c)"
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
