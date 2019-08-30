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
      <title>{"CC"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CC_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CC_svg_linearGradient-2"
        >
          <stop stopColor="#229716" offset="0%" />
          <stop stopColor="#1C7E12" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CC_svg_linearGradient-3"
        >
          <stop stopColor="#FFE244" offset="0%" />
          <stop stopColor="#FFDF32" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CC_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CC_svg_CC">
          <rect
            id="CC_svg_FlagBackground"
            fill="url(#CC_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CC_svg_Rectangle-2"
            fill="url(#CC_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M4,6 C2.8954305,6 2,5.1045695 2,4 C2,2.8954305 2.8954305,2 4,2 C5.1045695,2 6,2.8954305 6,4 C6,5.1045695 5.1045695,6 4,6 Z M4,4 C4.2082035,4 3.83990355,5.05443624 4,5 C4.26457858,4.91003759 5,3.67204063 5,3.5 C5,3.22385763 4.55228475,3 4,3 C3.44771525,3 3,3.22385763 3,3.5 C3,3.77614237 3.44771525,4 4,4 Z"
            id="CC_svg_Combined-Shape"
            fill="url(#CC_svg_linearGradient-3)"
          />
          <polygon
            id="CC_svg_Star-2"
            fill="url(#CC_svg_linearGradient-3)"
            points="16 13 15.2928932 13.2071068 15.5 12.5 15.2928932 11.7928932 16 12 16.7071068 11.7928932 16.5 12.5 16.7071068 13.2071068"
          />
          <polygon
            id="CC_svg_Star-2"
            fill="url(#CC_svg_linearGradient-3)"
            points="16 3.5 15.2928932 3.70710678 15.5 3 15.2928932 2.29289322 16 2.5 16.7071068 2.29289322 16.5 3 16.7071068 3.70710678"
          />
          <polygon
            id="CC_svg_Star-2"
            fill="url(#CC_svg_linearGradient-3)"
            points="19 6.5 18.2928932 6.70710678 18.5 6 18.2928932 5.29289322 19 5.5 19.7071068 5.29289322 19.5 6 19.7071068 6.70710678"
          />
          <polygon
            id="CC_svg_Star-2"
            fill="url(#CC_svg_linearGradient-3)"
            points="14 7.5 13.2928932 7.70710678 13.5 7 13.2928932 6.29289322 14 6.5 14.7071068 6.29289322 14.5 7 14.7071068 7.70710678"
          />
          <polygon
            id="CC_svg_Star-2"
            fill="url(#CC_svg_linearGradient-3)"
            points="17.5 8.75 17.1464466 8.85355339 17.25 8.5 17.1464466 8.14644661 17.5 8.25 17.8535534 8.14644661 17.75 8.5 17.8535534 8.85355339"
          />
          <path
            d="M12.0613625,5.54741025 C11.6335382,5.2048611 11.090693,5 10.5,5 C9.11928813,5 8,6.11928813 8,7.5 C8,8.88071187 9.11928813,10 10.5,10 C11.090693,10 11.6335382,9.7951389 12.0613625,9.45258975 C11.834734,9.53712452 11.58943,9.58333333 11.3333333,9.58333333 C10.1827401,9.58333333 9.25,8.65059323 9.25,7.5 C9.25,6.34940677 10.1827401,5.41666667 11.3333333,5.41666667 C11.58943,5.41666667 11.834734,5.46287548 12.0613625,5.54741025 L12.0613625,5.54741025 Z"
            id="CC_svg_Oval-12"
            fill="url(#CC_svg_linearGradient-3)"
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
