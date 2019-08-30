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
      <title>{"DJ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DJ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DJ_svg_linearGradient-2"
        >
          <stop stopColor="#1DC837" offset="0%" />
          <stop stopColor="#13AD2B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DJ_svg_linearGradient-3"
        >
          <stop stopColor="#82C5F5" offset="0%" />
          <stop stopColor="#6AB3E8" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DJ_svg_linearGradient-4"
        >
          <stop stopColor="#E21C21" offset="0%" />
          <stop stopColor="#D7151A" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="DJ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="DJ_svg_DJ">
          <rect
            id="DJ_svg_FlagBackground"
            fill="url(#DJ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="DJ_svg_Rectangle-2"
            fill="url(#DJ_svg_linearGradient-2)"
            x={0}
            y={7}
            width={21}
            height={8}
          />
          <rect
            id="DJ_svg_Rectangle-2"
            fill="url(#DJ_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <polygon
            id="DJ_svg_Rectangle-83"
            fill="url(#DJ_svg_linearGradient-1)"
            points="0 0 10 7.5 0 15"
          />
          <polygon
            id="DJ_svg_Star-8"
            fill="url(#DJ_svg_linearGradient-4)"
            points="3.5 8.47500004 2.03053687 9.52254249 2.57271986 7.80129158 1.12235871 6.72745751 2.92690936 6.7112084 3.5 5 4.07309064 6.7112084 5.87764129 6.72745751 4.42728014 7.80129158 4.96946313 9.52254249"
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
