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
      <title>{"SS"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_linearGradient-2"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_linearGradient-3"
        >
          <stop stopColor="#E22A32" offset="0%" />
          <stop stopColor="#D61C24" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_linearGradient-4"
        >
          <stop stopColor="#2CA244" offset="0%" />
          <stop stopColor="#218736" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_linearGradient-5"
        >
          <stop stopColor="#185AC6" offset="0%" />
          <stop stopColor="#104CAD" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SS_svg_linearGradient-6"
        >
          <stop stopColor="#FDE14A" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SS_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SS_svg_SS">
          <rect
            id="SS_svg_FlagBackground"
            fill="url(#SS_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SS_svg_Rectangle-2"
            fill="url(#SS_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="SS_svg_Rectangle-2"
            fill="url(#SS_svg_linearGradient-3)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <rect
            id="SS_svg_Rectangle-2"
            fill="url(#SS_svg_linearGradient-1)"
            x={0}
            y={4}
            width={21}
            height={1}
          />
          <rect
            id="SS_svg_Rectangle-2"
            fill="url(#SS_svg_linearGradient-4)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="SS_svg_Rectangle-2"
            fill="url(#SS_svg_linearGradient-1)"
            x={0}
            y={10}
            width={21}
            height={1}
          />
          <polygon
            id="SS_svg_Rectangle-83"
            fill="url(#SS_svg_linearGradient-5)"
            points="0 0 10 7.5 0 15"
          />
          <polygon
            id="SS_svg_Star-53"
            fill="url(#SS_svg_linearGradient-6)"
            points="3.8362378 7.98697775 3.15270364 9.2672036 2.94825467 7.83040236 1.51946386 7.57593429 2.82276483 6.93749577 2.62325771 5.5 3.63319098 6.54222453 4.9386796 5.90827135 4.25955172 7.19084006 5.26589519 8.23653122"
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
