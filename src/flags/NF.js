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
      <title>{"NF"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NF_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NF_svg_linearGradient-2"
        >
          <stop stopColor="#219646" offset="0%" />
          <stop stopColor="#197837" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NF_svg_linearGradient-3"
        >
          <stop stopColor="#259D4B" offset="0%" />
          <stop stopColor="#197837" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="NF_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="NF_svg_NF">
          <rect
            id="NF_svg_FlagBackground"
            fill="url(#NF_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="NF_svg_Mask"
            fill="url(#NF_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="NF_svg_Rectangle-2"
            fill="url(#NF_svg_linearGradient-2)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="NF_svg_Rectangle-2-Copy"
            fill="url(#NF_svg_linearGradient-1)"
            x={6}
            y={0}
            width={9}
            height={15}
          />
          <path
            d="M9.4435697,4.00314907 L9.86558914,2.48387909 C9.93982221,2.21664005 10.2319336,2 10.5,2 C10.7761424,2 11.0617981,2.22247314 11.1344109,2.48387909 L11.5564303,4.00314907 C11.5379075,4.00106855 11.5190785,4 11.5,4 C11.2238576,4 11,4.22385763 11,4.5 C11,4.77614237 11.2238576,5 11.5,5 C11.6146332,5 11.7202562,4.96142319 11.8045953,4.89654341 L12.1147885,6.01323896 C12.0779303,6.00458037 12.0395,6 12,6 C11.7238576,6 11.5,6.22385763 11.5,6.5 C11.5,6.77614237 11.7238576,7 12,7 C12.1359508,7 12.2592288,6.94574132 12.3493604,6.85769757 L12.6754588,8.0316521 C12.6208644,8.01118985 12.561739,8 12.5,8 C12.2238576,8 12,8.22385763 12,8.5 C12,8.77614237 12.2238576,9 12.5,9 C12.6587644,9 12.800246,8.92600331 12.8918379,8.81061681 L13.4999999,11 L11,11 L11,13 L9.99999999,13 L9.99999999,11 L7.49999999,11 L8.10816202,8.81061671 C8.19975388,8.92600327 8.34123551,9 8.5,9 C8.77614237,9 9,8.77614237 9,8.5 C9,8.22385763 8.77614237,8 8.5,8 C8.438261,8 8.37913553,8.01118987 8.32454107,8.03165214 L8.65063958,6.85769751 C8.74077116,6.94574129 8.86404918,7 9,7 C9.27614237,7 9.5,6.77614237 9.5,6.5 C9.5,6.22385763 9.27614237,6 9,6 C8.96049994,6 8.92206968,6.00458038 8.88521139,6.01323897 L9.19540461,4.89654338 C9.27974375,4.96142318 9.38536683,5 9.5,5 C9.77614237,5 10,4.77614237 10,4.5 C10,4.22385763 9.77614237,4 9.5,4 C9.48092147,4 9.4620925,4.00106855 9.4435697,4.00314907 L9.4435697,4.00314907 Z"
            id="NF_svg_Combined-Shape"
            fill="url(#NF_svg_linearGradient-3)"
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
