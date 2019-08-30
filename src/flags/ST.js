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
      <title>{"ST"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ST_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ST_svg_linearGradient-2"
        >
          <stop stopColor="#2ACB41" offset="0%" />
          <stop stopColor="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ST_svg_linearGradient-3"
        >
          <stop stopColor="#FDD043" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ST_svg_linearGradient-4"
        >
          <stop stopColor="#E71E43" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ST_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="ST_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="ST_svg_ST">
          <rect
            id="ST_svg_FlagBackground"
            fill="url(#ST_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="ST_svg_Rectangle-2"
            fill="url(#ST_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="ST_svg_Rectangle-2"
            fill="url(#ST_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="ST_svg_Rectangle-2"
            fill="url(#ST_svg_linearGradient-3)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <polygon
            id="ST_svg_Rectangle-83"
            fill="url(#ST_svg_linearGradient-4)"
            points="0 0 8 7.5 0 15"
          />
          <polygon
            id="ST_svg_Star-33"
            fill="url(#ST_svg_linearGradient-5)"
            points="11 8.31999999 9.8244295 9.11803399 10.2201337 7.75339393 9.09788697 6.88196601 10.5180161 6.83660607 11 5.5 11.4819839 6.83660607 12.902113 6.88196601 11.7798663 7.75339393 12.1755705 9.11803399"
          />
          <polygon
            id="ST_svg_Star-33"
            fill="url(#ST_svg_linearGradient-5)"
            points="16 8.31999999 14.8244295 9.11803399 15.2201337 7.75339393 14.097887 6.88196601 15.5180161 6.83660607 16 5.5 16.4819839 6.83660607 17.902113 6.88196601 16.7798663 7.75339393 17.1755705 9.11803399"
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
