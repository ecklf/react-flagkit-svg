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
      <title>{"VA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_linearGradient-2"
        >
          <stop stopColor="#FDE048" offset="0%" />
          <stop stopColor="#FFDF32" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_linearGradient-3"
        >
          <stop stopColor="#CDCCCC" offset="0%" />
          <stop stopColor="#E4E4E4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_linearGradient-4"
        >
          <stop stopColor="#CD9D25" offset="0%" />
          <stop stopColor="#EBB93A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VA_svg_linearGradient-5"
        >
          <stop stopColor="#F5252C" offset="0%" />
          <stop stopColor="#F6151C" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="VA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="VA_svg_VA">
          <rect
            id="VA_svg_FlagBackground"
            fill="url(#VA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="VA_svg_Rectangle-2-Copy-2"
            fill="url(#VA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="VA_svg_Rectangle-2"
            fill="url(#VA_svg_linearGradient-1)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <path
            d="M18.6819805,8.02512627 C19.267767,7.43933983 19.267767,6.48959236 18.6819805,5.90380592 C18.0961941,5.31801948 17.1464466,5.31801948 16.5606602,5.90380592 C16.0988421,6.36562402 16.0011088,7.05365542 16.2674604,7.61121929 L14.0857864,9.79289322 L13.732233,9.43933983 L13.3786797,9.08578644 L12.6715729,9.79289322 L13.0251263,10.1464466 L13.732233,10.8535534 L14.0857864,11.2071068 L14.4393398,10.8535534 L16.9745671,8.31832607 C17.532131,8.58467763 18.2201624,8.48694436 18.6819805,8.02512627 Z"
            id="VA_svg_Combined-Shape"
            fill="url(#VA_svg_linearGradient-3)"
            transform="translate(15.896447, 8.335786) scale(1, -1) translate(-15.896447, -8.335786) "
          />
          <path
            d="M14.0254329,8.31832607 C13.467869,8.58467763 12.7798376,8.48694436 12.3180195,8.02512627 C11.732233,7.43933983 11.732233,6.48959236 12.3180195,5.90380592 C12.9038059,5.31801948 13.8535534,5.31801948 14.4393398,5.90380592 C14.9011579,6.36562402 14.9988912,7.05365542 14.7325396,7.61121929 L16.9142136,9.79289322 L17.267767,9.43933983 L17.6213203,9.08578644 L18.3284271,9.79289322 L17.9748737,10.1464466 L17.267767,10.8535534 L16.9142136,11.2071068 L16.5606602,10.8535534 L14.0254329,8.31832607 L14.0254329,8.31832607 Z"
            id="VA_svg_Combined-Shape-Copy"
            fill="url(#VA_svg_linearGradient-4)"
            transform="translate(15.103553, 8.335786) scale(1, -1) translate(-15.103553, -8.335786) "
          />
          <path
            d="M15.5,5 C14.6715729,5 14,4.77614237 14,4.5 C14,4.22385763 14.6715729,4 15.5,4 C16.3284271,4 17,4.22385763 17,4.5 C17,4.77614237 16.3284271,5 15.5,5 Z M15.5,2.5 C15.0857864,2.5 14.75,2.38807119 14.75,2.25 C14.75,2.11192881 15.0857864,2 15.5,2 C15.9142136,2 16.25,2.11192881 16.25,2.25 C16.25,2.38807119 15.9142136,2.5 15.5,2.5 Z M15.5,3.66666667 C14.9477153,3.66666667 14.5,3.51742825 14.5,3.33333333 C14.5,3.14923842 14.9477153,3 15.5,3 C16.0522847,3 16.5,3.14923842 16.5,3.33333333 C16.5,3.51742825 16.0522847,3.66666667 15.5,3.66666667 Z"
            id="VA_svg_Combined-Shape"
            fill="url(#VA_svg_linearGradient-4)"
          />
          <path
            d="M13.0256584,10.6581139 C13.1062214,10.899803 13.2733309,11.2340221 13.5533894,11.5700922 C14.0329058,12.1455119 14.6828006,12.5 15.5,12.5 C16.3171994,12.5 16.9670942,12.1455119 17.4466106,11.5700922 C17.7266691,11.2340221 17.8937786,10.899803 17.9743416,10.6581139 C18.0616655,10.3961422 17.9200855,10.1129822 17.6581139,10.0256584 C17.3961422,9.93833446 17.1129822,10.0799145 17.0256584,10.3418861 C16.9812214,10.475197 16.8670809,10.7034779 16.6783894,10.9299078 C16.3766558,11.2919881 15.9953006,11.5 15.5,11.5 C15.0046994,11.5 14.6233442,11.2919881 14.3216106,10.9299078 C14.1329191,10.7034779 14.0187786,10.475197 13.9743416,10.3418861 C13.8870178,10.0799145 13.6038578,9.93833446 13.3418861,10.0256584 C13.0799145,10.1129822 12.9383345,10.3961422 13.0256584,10.6581139 Z"
            id="VA_svg_Line"
            fill="url(#VA_svg_linearGradient-5)"
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
