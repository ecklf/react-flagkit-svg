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
      <title>{"JE"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="JE_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="JE_svg_linearGradient-2"
        >
          <stop stopColor="#EF273F" offset="0%" />
          <stop stopColor="#DB1C33" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="JE_svg_linearGradient-3"
        >
          <stop stopColor="#F22A41" offset="0%" />
          <stop stopColor="#E51D34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="JE_svg_linearGradient-4"
        >
          <stop stopColor="#FADF46" offset="0%" />
          <stop stopColor="#F9DC38" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="JE_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="JE_svg_JE">
          <rect
            id="JE_svg_FlagBackground"
            fill="url(#JE_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M10.5002378,6.29111667 L-0.961614117,-1.44000006 L-2.07999992,0.218075088 L8.71194613,7.49733462 L-2.07999992,14.7765941 L-0.961614117,16.4346693 L10.5002378,8.70355256 L21.9620897,16.4346693 L23.0804755,14.7765941 L12.2885294,7.49733462 L23.0804755,0.218075088 L21.9620897,-1.44000006 L10.5002378,6.29111667 Z"
            id="JE_svg_Rectangle-2"
            fill="url(#JE_svg_linearGradient-2)"
          />
          <path
            d="M9.00023778,2.50201906 C9.00023778,2.22328954 9.21599038,1.99733462 9.49562677,1.99733462 L11.5048488,1.99733462 C11.7784446,1.99733462 12.0002378,2.21136965 12.0002378,2.50201906 L12.0002378,3.49265017 C12.0002378,3.77137969 11.8397115,4.15786089 11.6523374,4.34523501 L10.8481382,5.14943423 C10.6559981,5.34157431 10.3397115,5.33680834 10.1523374,5.14943423 L9.34813817,4.34523501 C9.15599809,4.15309493 9.00023778,3.78329958 9.00023778,3.49265017 L9.00023778,2.50201906 Z"
            id="JE_svg_Rectangle-1462"
            fill="url(#JE_svg_linearGradient-3)"
          />
          <path
            d="M10.5002378,3.99733462 C10.2240954,3.99733462 10.0002378,3.77347699 10.0002378,3.49733462 C10.0002378,3.22119224 10.2240954,2.99733462 10.5002378,2.99733462 C10.7763802,2.99733462 11.0002378,3.22119224 11.0002378,3.49733462 C11.0002378,3.77347699 10.7763802,3.99733462 10.5002378,3.99733462 Z M10.5002378,1.99733462 C9.67181066,1.99733462 9.00023778,1.77347699 9.00023778,1.49733462 C9.00023778,1.22119224 9.67181066,0.997334616 10.5002378,0.997334616 C11.3286649,0.997334616 12.0002378,1.22119224 12.0002378,1.49733462 C12.0002378,1.77347699 11.3286649,1.99733462 10.5002378,1.99733462 Z"
            id="JE_svg_Combined-Shape"
            fill="url(#JE_svg_linearGradient-4)"
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
