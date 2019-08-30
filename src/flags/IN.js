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
      <title>{"IN"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IN_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IN_svg_linearGradient-2"
        >
          <stop stopColor="#FFA44A" offset="0%" />
          <stop stopColor="#FF9934" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IN_svg_linearGradient-3"
        >
          <stop stopColor="#1A9F0B" offset="0%" />
          <stop stopColor="#138806" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="IN_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="IN_svg_IN">
          <rect
            id="IN_svg_FlagBackground"
            fill="url(#IN_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="IN_svg_Rectangle-2"
            fill="url(#IN_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="IN_svg_Rectangle-2"
            fill="url(#IN_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="IN_svg_Rectangle-2"
            fill="url(#IN_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <circle
            id="IN_svg_Oval-1"
            fillOpacity={0.15}
            fill="#181A93"
            cx={10.5}
            cy={7.5}
            r={1.5}
          />
          <path
            d="M10.5,9.5 C9.3954305,9.5 8.5,8.6045695 8.5,7.5 C8.5,6.3954305 9.3954305,5.5 10.5,5.5 C11.6045695,5.5 12.5,6.3954305 12.5,7.5 C12.5,8.6045695 11.6045695,9.5 10.5,9.5 Z M10.5,9 C11.3284271,9 12,8.32842712 12,7.5 C12,6.67157288 11.3284271,6 10.5,6 C9.67157288,6 9,6.67157288 9,7.5 C9,8.32842712 9.67157288,9 10.5,9 Z"
            id="IN_svg_Oval-1"
            fill="#181A93"
            fillRule="nonzero"
          />
          <circle id="IN_svg_Oval-8" fill="#181A93" cx={10.5} cy={7.5} r={1} />
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
