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
      <title>{"EG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EG_svg_linearGradient-2"
        >
          <stop stopColor="#E41D33" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EG_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="EG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="EG_svg_EG">
          <rect
            id="EG_svg_FlagBackground"
            fill="url(#EG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="EG_svg_Rectangle-2"
            fill="url(#EG_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="EG_svg_Rectangle-2"
            fill="url(#EG_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="EG_svg_Rectangle-2"
            fill="url(#EG_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <path
            d="M8,6.49538898 C8,6.2217932 8.23193359,6 8.5,6 L8.74765778,6 C8.88702254,6 9.04614258,6.09228516 9.1159668,6.23193359 L9.5,7 C9.5,7 10.0493306,6 10.5,6 C11,6 11.5,7 11.5,7 L11.8840332,6.23193359 C11.9480799,6.10384021 12.1070175,6 12.2523422,6 L12.5,6 C12.7761424,6 13,6.2157526 13,6.49538898 L13,8.50461102 C13,8.7782068 12.8160706,8.87738037 12.5901184,8.72674561 L11.5,8 L11,8 L11,8.5 C11,8.77614237 10.7680664,9 10.5,9 L10.5,9 C10.2238576,9 10,8.76806641 10,8.5 L10,8 L9.5,8 L8.40988159,8.72674561 C8.18351024,8.87765984 8,8.7842474 8,8.50461102 L8,6.49538898 Z"
            id="EG_svg_Rectangle-129"
            fillOpacity={0.25}
            fill="#F4B32E"
          />
          <path
            d="M12.5,8.06574145 L12.5,6.5 L12.309017,6.5 L11.7696097,7.57881459 L12.5,8.06574145 Z M8.69098301,6.5 L8.5006969,6.5 C8.50035241,6.49933214 8.5,6.49797367 8.5,6.49538898 L8.5,8.06574145 L9.2303903,7.57881459 L8.69098301,6.5 Z M10.5,7.5 L10.5,8.5 L10.5,7.5 L11.190983,7.5 L11.0527864,7.2236068 C11.0025448,7.12312361 10.9070022,6.95933623 10.7875,6.8 C10.6669136,6.63921807 10.5562629,6.5394688 10.5157356,6.50953831 C10.4427553,6.55637767 10.3378325,6.66219008 10.2262706,6.80620317 C10.0998497,6.96939732 9.99539579,7.13667289 9.93823177,7.24073412 L9.79580908,7.5 L10.5,7.5 Z M11.3738698,6.7763932 C11.453181,6.90636206 11.5,7 11.5,7 L11.6118034,6.7763932 C11.6118034,6.7763932 11.8433728,6.58071737 11.7686406,6.46271887 L11.8840332,6.23193359 C11.9480799,6.10384021 12.1070175,6 12.2523422,6 L12.5,6 C12.7761424,6 13,6.2157526 13,6.49538898 L13,8.50461102 C13,8.7782068 12.8160706,8.87738037 12.5901184,8.72674561 L11.5,8 L11,8 L11,8.5 C11,8.77614237 10.7680664,9 10.5,9 C10.2238576,9 10,8.76806641 10,8.5 L10,8 L9.5,8 L8.40988159,8.72674561 C8.18351024,8.87765984 8,8.7842474 8,8.50461102 L8,6.49538898 C8,6.2217932 8.23193359,6 8.5,6 L8.74765778,6 C8.88702254,6 9.04614258,6.09228516 9.1159668,6.23193359 L9.23620652,6.47241305 C9.1647889,6.58029712 9.38273722,6.76547444 9.38273722,6.76547444 L9.5,7 C9.5,7 9.55301337,6.90349461 9.63961349,6.77044324 L9.81767445,6.5173149 C10.0131068,6.26167861 10.2694622,6 10.5,6 C10.7509295,6 11.001859,6.25186245 11.1895888,6.50278847 L11.3738698,6.7763932 Z"
            id="EG_svg_Rectangle-129"
            fill="#C6A846"
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
