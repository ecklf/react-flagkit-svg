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
      <title>{"UZ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UZ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UZ_svg_linearGradient-2"
        >
          <stop stopColor="#04AAC8" offset="0%" />
          <stop stopColor="#009AB6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UZ_svg_linearGradient-3"
        >
          <stop stopColor="#23C840" offset="0%" />
          <stop stopColor="#1EB639" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="UZ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="UZ_svg_UZ">
          <rect
            id="UZ_svg_FlagBackground"
            fill="url(#UZ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="UZ_svg_Rectangle-2"
            fill="url(#UZ_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="UZ_svg_Rectangle-2"
            fill="url(#UZ_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="UZ_svg_Rectangle-2-Copy-4"
            fill="url(#UZ_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <path
            d="M4.33356893,1.25274924 C4.09517255,1.0931066 3.80845938,1 3.5,1 C2.67157288,1 2,1.67157288 2,2.5 C2,3.32842712 2.67157288,4 3.5,4 C3.80845938,4 4.09517255,3.9068934 4.33356893,3.74725076 C4.30594816,3.74907396 4.27808222,3.75 4.25,3.75 C3.55964406,3.75 3,3.19035594 3,2.5 C3,1.80964406 3.55964406,1.25 4.25,1.25 C4.27808222,1.25 4.30594816,1.25092604 4.33356893,1.25274924 Z M5.5,4 C5.22385763,4 5,3.77614237 5,3.5 C5,3.22385763 5.22385763,3 5.5,3 C5.77614237,3 6,3.22385763 6,3.5 C6,3.77614237 5.77614237,4 5.5,4 Z M7.5,2 C7.22385763,2 7,1.77614237 7,1.5 C7,1.22385763 7.22385763,1 7.5,1 C7.77614237,1 8,1.22385763 8,1.5 C8,1.77614237 7.77614237,2 7.5,2 Z M9.5,2 C9.22385763,2 9,1.77614237 9,1.5 C9,1.22385763 9.22385763,1 9.5,1 C9.77614237,1 10,1.22385763 10,1.5 C10,1.77614237 9.77614237,2 9.5,2 Z M9.5,4 C9.22385763,4 9,3.77614237 9,3.5 C9,3.22385763 9.22385763,3 9.5,3 C9.77614237,3 10,3.22385763 10,3.5 C10,3.77614237 9.77614237,4 9.5,4 Z M7.5,4 C7.22385763,4 7,3.77614237 7,3.5 C7,3.22385763 7.22385763,3 7.5,3 C7.77614237,3 8,3.22385763 8,3.5 C8,3.77614237 7.77614237,4 7.5,4 Z"
            id="UZ_svg_Oval-68"
            fill="url(#UZ_svg_linearGradient-1)"
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
