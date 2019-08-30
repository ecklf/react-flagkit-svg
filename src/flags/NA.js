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
      <title>{"NA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_linearGradient-2"
        >
          <stop stopColor="#0C4799" offset="0%" />
          <stop stopColor="#05387E" offset="100%" />
        </linearGradient>
        <polygon
          id="NA_svg_path-3"
          points="3.12149555 12.3039496 24.1214956 2.30394957 3.12149555 2.30394957"
        />
        <filter
          x="-3.6%"
          y="-7.5%"
          width="107.1%"
          height="115.0%"
          filterUnits="objectBoundingBox"
          id="NA_svg_filter-4"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={0}
            dy={0}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_linearGradient-5"
        >
          <stop stopColor="#FFD243" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <polygon
          id="NA_svg_path-6"
          points="6.62149555 6.80394957 5.85612869 7.65170864 5.91438877 6.51105635 4.77373649 6.56931644 5.62149555 5.80394957 4.77373649 5.03858271 5.91438877 5.09684279 5.85612869 3.95619051 6.62149555 4.80394957 7.38686242 3.95619051 7.32860234 5.09684279 8.46925462 5.03858271 7.62149555 5.80394957 8.46925462 6.56931644 7.32860234 6.51105635 7.38686242 7.65170864"
        />
        <filter
          x="-6.2%"
          y="-6.2%"
          width="112.5%"
          height="125.0%"
          filterUnits="objectBoundingBox"
          id="NA_svg_filter-7"
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
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_linearGradient-8"
        >
          <stop stopColor="#1BAC55" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <polygon
          id="NA_svg_path-9"
          points="3.12149555 17.3039496 24.1214956 17.3039496 24.1214956 7.30394957"
        />
        <filter
          x="-3.6%"
          y="-7.5%"
          width="107.1%"
          height="115.0%"
          filterUnits="objectBoundingBox"
          id="NA_svg_filter-10"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={0}
            dy={0}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
        <polygon
          id="NA_svg_path-11"
          points="5.43328436 19.3039725 25.7495351 6.60897002 21.8097068 0.30392669 1.49345602 12.9989291"
        />
        <filter
          x="-3.1%"
          y="-3.9%"
          width="106.2%"
          height="107.9%"
          filterUnits="objectBoundingBox"
          id="NA_svg_filter-12"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={0}
            dy={0}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_linearGradient-13"
        >
          <stop stopColor="#E52347" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="NA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="NA_svg_NA">
          <rect
            id="NA_svg_FlagBackground"
            fill="url(#NA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g id="NA_svg_Group-2" transform="translate(-3.120000, -2.300000)">
            <g id="NA_svg_Rectangle-2">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#NA_svg_filter-4)"
                xlinkHref="#path-3"
              />
              <use
                fill="url(#NA_svg_linearGradient-2)"
                fillRule="evenodd"
                xlinkHref="#path-3"
              />
            </g>
            <g id="NA_svg_Star-31">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#NA_svg_filter-7)"
                xlinkHref="#path-6"
              />
              <use
                fill="url(#NA_svg_linearGradient-5)"
                fillRule="evenodd"
                xlinkHref="#path-6"
              />
            </g>
            <g id="NA_svg_Rectangle-2">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#NA_svg_filter-10)"
                xlinkHref="#path-9"
              />
              <use
                fill="url(#NA_svg_linearGradient-8)"
                fillRule="evenodd"
                xlinkHref="#path-9"
              />
            </g>
            <g id="NA_svg_Rectangle-2">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#NA_svg_filter-12)"
                xlinkHref="#path-11"
              />
              <use
                fill="url(#NA_svg_linearGradient-1)"
                fillRule="evenodd"
                xlinkHref="#path-11"
              />
            </g>
            <polygon
              id="NA_svg_Rectangle-2"
              fill="url(#NA_svg_linearGradient-13)"
              points="2.64959632 19.6078991 27.2429911 4.24024048 24.5933948 1.77635684e-15 -1.77635684e-14 15.3676587"
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
