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
      viewBox="0 0 21 15"
      size={size}
      {...otherProps}
    >
      <title>{"BN"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BN_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BN_svg_linearGradient-2"
        >
          <stop stopColor="#F7E250" offset="0%" />
          <stop stopColor="#F7DF38" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BN_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BN_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BN_svg_BN">
          <rect
            id="BN_svg_FlagBackground"
            fill="url(#BN_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BN_svg_Mask-Copy"
            fill="url(#BN_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BN_svg_Rectangle-2-Copy-4"
            fill="url(#BN_svg_linearGradient-1)"
            transform="translate(11.013030, 6.090461) rotate(20.000000) translate(-11.013030, -6.090461) "
            x={-3.48696979}
            y={4.59046107}
            width={29}
            height={3}
          />
          <rect
            id="BN_svg_Rectangle-2-Copy-4"
            fill="url(#BN_svg_linearGradient-3)"
            transform="translate(9.986970, 8.909539) rotate(20.000000) translate(-9.986970, -8.909539) "
            x={-4.51303021}
            y={7.40953893}
            width={29}
            height={3}
          />
        </g>
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
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
