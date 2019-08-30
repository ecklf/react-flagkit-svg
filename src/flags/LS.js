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
      <title>{"LS"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_linearGradient-2"
        >
          <stop stopColor="#0C33B8" offset="0%" />
          <stop stopColor="#05279D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_linearGradient-3"
        >
          <stop stopColor="#1DB158" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LS_svg_linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="LS_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LS_svg_LS">
          <rect
            id="LS_svg_FlagBackground"
            fill="url(#LS_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="LS_svg_Rectangle-2"
            fill="url(#LS_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="LS_svg_Rectangle-2"
            fill="url(#LS_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="LS_svg_Rectangle-2"
            fill="url(#LS_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <path
            d="M10,7.49999999 L10.3417969,6.47460937 C10.42917,6.21248985 10.5695229,6.20856856 10.6582031,6.47460936 L11,7.49999994 L11.8609543,8.79143142 C11.9377471,8.90662067 11.9176025,9.06952286 11.8062744,9.14731216 C11.8062744,9.14731216 11.5,9.5 10.5,9.5 C9.5,9.5 9.19372559,9.14731216 9.19372559,9.14731216 C9.0867339,9.0659539 9.06561279,8.90158081 9.13904572,8.79143143 L10,7.49999999 Z"
            id="LS_svg_Rectangle-328"
            fill="url(#LS_svg_linearGradient-4)"
          />
          <path
            d="M10.5,7.5 C9.94771525,7.5 9.5,7.05228475 9.5,6.5 C9.5,5.94771525 9.94771525,5.5 10.5,5.5 C11.0522847,5.5 11.5,5.94771525 11.5,6.5 C11.5,7.05228475 11.0522847,7.5 10.5,7.5 Z M10.5,7.5 C10.7761424,7.5 11,6.77614237 11,6.5 C11,6.22385763 10.7761424,6 10.5,6 C10.2238576,6 10,6.22385763 10,6.5 C10,6.77614237 10.2238576,7.5 10.5,7.5 Z"
            id="LS_svg_Combined-Shape"
            fill="#242424"
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
