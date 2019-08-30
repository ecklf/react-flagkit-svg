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
      <title>{"ET"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_linearGradient-2"
        >
          <stop stopColor="#20AA46" offset="0%" />
          <stop stopColor="#168835" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_linearGradient-3"
        >
          <stop stopColor="#E92F3B" offset="0%" />
          <stop stopColor="#D81824" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_linearGradient-4"
        >
          <stop stopColor="#FADF50" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_linearGradient-5"
        >
          <stop stopColor="#205CCA" offset="0%" />
          <stop stopColor="#154BAD" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_linearGradient-6"
        >
          <stop stopColor="#FFDB3D" offset="0%" />
          <stop stopColor="#FDD420" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="ET_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="ET_svg_ET">
          <rect
            id="ET_svg_FlagBackground"
            fill="url(#ET_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="ET_svg_Rectangle-2"
            fill="url(#ET_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="ET_svg_Rectangle-2"
            fill="url(#ET_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="ET_svg_Rectangle-2"
            fill="url(#ET_svg_linearGradient-4)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <circle
            id="ET_svg_Oval-95"
            fill="url(#ET_svg_linearGradient-5)"
            cx={10.5}
            cy={7.5}
            r={3.5}
          />
          <path
            d="M10.5,8.47500004 L9.03053687,9.52254249 L9.57271986,7.80129158 L8.12235871,6.72745751 L9.92690936,6.7112084 L10.5,5 L11.0730906,6.7112084 L12.8776413,6.72745751 L11.4272801,7.80129158 L11.9694631,9.52254249 L10.5,8.47500004 Z M10.5,7.86095816 L11.0440151,8.2487725 L10.8432916,7.61154221 L11.3802349,7.21399436 L10.7121659,7.20797871 L10.5,6.57446629 L10.2878341,7.20797871 L9.61976514,7.21399436 L10.1567084,7.61154221 L9.95598494,8.2487725 L10.5,7.86095816 Z"
            id="ET_svg_Star-8"
            fill="url(#ET_svg_linearGradient-6)"
            fillRule="nonzero"
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
