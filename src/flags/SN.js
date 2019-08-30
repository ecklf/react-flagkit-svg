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
      <title>{"SN"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SN_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SN_svg_linearGradient-2"
        >
          <stop stopColor="#F13642" offset="0%" />
          <stop stopColor="#E1202C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SN_svg_linearGradient-3"
        >
          <stop stopColor="#17A052" offset="0%" />
          <stop stopColor="#108442" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SN_svg_linearGradient-4"
        >
          <stop stopColor="#FFF166" offset="0%" />
          <stop stopColor="#FDEE54" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SN_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SN_svg_SN">
          <rect
            id="SN_svg_FlagBackground"
            fill="url(#SN_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SN_svg_Mask"
            fill="url(#SN_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="SN_svg_Rectangle-2"
            fill="url(#SN_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="SN_svg_Rectangle-2-Copy"
            fill="url(#SN_svg_linearGradient-4)"
            x={7}
            y={0}
            width={7}
            height={15}
          />
          <polygon
            id="SN_svg_Star-33"
            fill="url(#SN_svg_linearGradient-3)"
            points="10.5 8.52499999 9.03053687 9.52254249 9.52516708 7.81674242 8.12235871 6.72745751 9.89752012 6.67075759 10.5 5 11.1024799 6.67075759 12.8776413 6.72745751 11.4748329 7.81674242 11.9694631 9.52254249"
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
