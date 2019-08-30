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
      <title>{"GI"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_linearGradient-2"
        >
          <stop stopColor="#E71924" offset="0%" />
          <stop stopColor="#D6101B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_linearGradient-3"
        >
          <stop stopColor="#EA1824" offset="0%" />
          <stop stopColor="#D6101B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GI_svg_linearGradient-5"
        >
          <stop stopColor="#ECCE3E" offset="0%" />
          <stop stopColor="#D9BC2D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GI_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GI_svg_GI">
          <rect
            id="GI_svg_FlagBackground"
            fill="url(#GI_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GI_svg_Rectangle-2"
            fill="url(#GI_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={10}
          />
          <rect
            id="GI_svg_Combined-Shape"
            fill="url(#GI_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <path
            d="M9,6 L8,6 L8,4.49047852 C8,4.21505737 7.77404508,4 7.49531555,4 L6.50468445,4 C6.21403503,4 6,4.21959471 6,4.49047852 L6,6.75476074 L6,8 L5,9 L16,9 L15,8 L15,6.75476074 L15,4.49047852 C15,4.21505737 14.7740451,4 14.4953156,4 L13.5046844,4 C13.214035,4 13,4.21959471 13,4.49047852 L13,6 L12,6 L12,3.49047852 C12,3.21505737 11.7782068,3 11.504611,3 L9.49538898,3 C9.2157526,3 9,3.21959471 9,3.49047852 L9,6 Z"
            id="GI_svg_Combined-Shape"
            fill="url(#GI_svg_linearGradient-3)"
          />
          <path
            d="M7,8 C6.72385763,8 6.5,7.77614237 6.5,7.5 C6.5,7.22385763 6.72385763,7 7,7 C7.27614237,7 7.5,7.22385763 7.5,7.5 C7.5,7.77614237 7.27614237,8 7,8 Z M7,6 C6.72385763,6 6.5,5.77614237 6.5,5.5 C6.5,5.22385763 6.72385763,5 7,5 C7.27614237,5 7.5,5.22385763 7.5,5.5 C7.5,5.77614237 7.27614237,6 7,6 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 C10.7761424,7 11,7.22385763 11,7.5 C11,7.77614237 10.7761424,8 10.5,8 Z M10.5,5 C10.2238576,5 10,4.77614237 10,4.5 C10,4.22385763 10.2238576,4 10.5,4 C10.7761424,4 11,4.22385763 11,4.5 C11,4.77614237 10.7761424,5 10.5,5 Z M14,8 C13.7238576,8 13.5,7.77614237 13.5,7.5 C13.5,7.22385763 13.7238576,7 14,7 C14.2761424,7 14.5,7.22385763 14.5,7.5 C14.5,7.77614237 14.2761424,8 14,8 Z M14,6 C13.7238576,6 13.5,5.77614237 13.5,5.5 C13.5,5.22385763 13.7238576,5 14,5 C14.2761424,5 14.5,5.22385763 14.5,5.5 C14.5,5.77614237 14.2761424,6 14,6 Z"
            id="GI_svg_Combined-Shape"
            fill="url(#GI_svg_linearGradient-4)"
          />
          <path
            d="M10,9.9430981 L10,12 L9,12 L9,13 L11,13 L11,9.9430981 C11.5825962,9.80581929 12,9.43540628 12,9 C12,8.44771525 11.3284271,8 10.5,8 C9.67157288,8 9,8.44771525 9,9 C9,9.43540628 9.41740381,9.80581929 10,9.9430981 Z"
            id="GI_svg_Combined-Shape"
            fill="url(#GI_svg_linearGradient-5)"
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
