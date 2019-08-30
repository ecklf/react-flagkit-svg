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
      <title>{"FM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="FM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="FM_svg_linearGradient-2"
        >
          <stop stopColor="#95CEF5" offset="0%" />
          <stop stopColor="#78B3DC" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="FM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="FM_svg_FM">
          <rect
            id="FM_svg_FlagBackground"
            fill="url(#FM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="FM_svg_Mask-Copy"
            fill="url(#FM_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M10.5,4.31999999 L9.3244295,5.11803399 L9.72013366,3.75339393 L8.59788697,2.88196601 L10.0180161,2.83660607 L10.5,1.5 L10.9819839,2.83660607 L12.402113,2.88196601 L11.2798663,3.75339393 L11.6755705,5.11803399 L10.5,4.31999999 Z M10.5,12.32 L9.3244295,13.118034 L9.72013366,11.7533939 L8.59788697,10.881966 L10.0180161,10.8366061 L10.5,9.5 L10.9819839,10.8366061 L12.402113,10.881966 L11.2798663,11.7533939 L11.6755705,13.118034 L10.5,12.32 Z M14.5,8.31999999 L13.3244295,9.11803399 L13.7201337,7.75339393 L12.597887,6.88196601 L14.0180161,6.83660607 L14.5,5.5 L14.9819839,6.83660607 L16.402113,6.88196601 L15.2798663,7.75339393 L15.6755705,9.11803399 L14.5,8.31999999 Z M6.5,8.31999999 L5.3244295,9.11803399 L5.72013366,7.75339393 L4.59788697,6.88196601 L6.0180161,6.83660607 L6.5,5.5 L6.9819839,6.83660607 L8.40211303,6.88196601 L7.27986634,7.75339393 L7.6755705,9.11803399 L6.5,8.31999999 Z"
            id="FM_svg_Star-33"
            fill="url(#FM_svg_linearGradient-1)"
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
