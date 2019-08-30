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
      <title>{"PK"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PK_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PK_svg_linearGradient-2"
        >
          <stop stopColor="#0A632F" offset="0%" />
          <stop stopColor="#05411E" offset="100%" />
        </linearGradient>
        <path
          d="M15.9781898,10.8777212 C15.246875,11.4729173 14.3268852,11.8275274 13.3275103,11.8275274 C10.9454095,11.8275274 9.01433521,9.81280873 9.01433521,7.32752735 C9.01433521,4.84224598 10.9454095,2.82752735 13.3275103,2.82752735 C14.3268852,2.82752735 15.246875,3.18213737 15.9781898,3.77733347 C15.6461512,3.69153605 15.2964768,3.64570917 14.9354035,3.64570917 C12.7698573,3.64570917 11.0143352,5.29411532 11.0143352,7.32752735 C11.0143352,9.36093939 12.7698573,11.0093455 14.9354035,11.0093455 C15.2964768,11.0093455 15.6461512,10.9635187 15.9781898,10.8777212 L15.9781898,10.8777212 Z M16.0143352,8.10752738 L14.8387647,8.94556134 L15.2725111,7.56856062 L14.1122222,6.70949336 L15.5558627,6.69649407 L16.0143352,5.32752735 L16.4728077,6.69649407 L17.9164482,6.70949336 L16.7561593,7.56856062 L17.1899057,8.94556134 L16.0143352,8.10752738 L16.0143352,8.10752738 Z"
          id="PK_svg_path-3"
        />
        <filter
          x="-2.8%"
          y="-2.8%"
          width="105.6%"
          height="111.1%"
          filterUnits="objectBoundingBox"
          id="PK_svg_filter-4"
        >
          <feOffset
            dx={0}
            dy={0.5}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
      </defs>
      <g
        id="PK_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PK_svg_PK">
          <rect
            id="PK_svg_FlagBackground"
            fill="url(#PK_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PK_svg_Mask-Copy"
            fill="url(#PK_svg_linearGradient-2)"
            x={0}
            y={-0.00182540814}
            width={21}
            height={15}
          />
          <rect
            id="PK_svg_Rectangle-2-Copy"
            fill="url(#PK_svg_linearGradient-1)"
            x={0}
            y={-0.00182540814}
            width={6}
            height={15}
          />
          <g
            id="PK_svg_Star-8"
            transform="translate(13.465392, 7.327527) rotate(-45.000000) translate(-13.465392, -7.327527) "
          >
            <use
              fill="black"
              fillOpacity={1}
              filter="url(#PK_svg_filter-4)"
              xlinkHref="#path-3"
            />
            <use
              fill="url(#PK_svg_linearGradient-1)"
              fillRule="evenodd"
              xlinkHref="#path-3"
            />
          </g>
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
