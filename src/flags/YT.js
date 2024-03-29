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
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_prefix__i"
        >
          <stop stopColor="#E6402C" offset="0%" />
          <stop stopColor="#D1321F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_prefix__f"
        >
          <stop stopColor="#1B2CA9" offset="0%" />
          <stop stopColor="#132294" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_prefix__k"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_prefix__j"
        >
          <stop stopColor="#D0D0D0" offset="0%" />
          <stop stopColor="#C4C4C4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_prefix__l"
        >
          <stop stopColor="#F7E04B" offset="0%" />
          <stop stopColor="#EAD135" offset="100%" />
        </linearGradient>
        <path
          d="M0 .491A.49.49 0 01.498 0h4.004A.5.5 0 015 .491v5.018a.535.535 0 01-.5.522S3 6 2.5 6.94C2 6 .5 6.03.5 6.03a.54.54 0 01-.5-.522V.491z"
          id="YT_svg_prefix__b"
        />
        <path id="YT_svg_prefix__h" d="M0 3h5v4H0z" />
        <path id="YT_svg_prefix__e" d="M0 0h5v3H0z" />
        <filter
          x="-15%"
          y="-18.8%"
          width="130%"
          height="137.5%"
          filterUnits="objectBoundingBox"
          id="YT_svg_prefix__g"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-15%"
          y="-25%"
          width="130%"
          height="150%"
          filterUnits="objectBoundingBox"
          id="YT_svg_prefix__d"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#YT_svg_prefix__a)" d="M0 0h21v15H0z" />
        <g transform="translate(8 4)">
          <mask id="YT_svg_prefix__c" fill="#fff">
            <use xlinkHref="#YT_svg_prefix__b" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#YT_svg_prefix__b" />
          <path
            stroke="#979797"
            d="M4.5.5V.491.5zm0 0h.002H4.5zm-4 0v5.009s.02.022-.01.022H.5c.342-.004.793.048 1.25.213.285.102.538.24.75.418.212-.178.465-.316.75-.418.444-.16.882-.214 1.22-.213.02-.005.03-.017.03-.022V.5s0 0 0 0h-4z"
          />
          <g mask="url(#YT_svg_prefix__c)">
            <use
              fill="#000"
              filter="url(#YT_svg_prefix__d)"
              xlinkHref="#YT_svg_prefix__e"
            />
            <use fill="url(#YT_svg_prefix__f)" xlinkHref="#YT_svg_prefix__e" />
          </g>
          <g mask="url(#YT_svg_prefix__c)">
            <use
              fill="#000"
              filter="url(#YT_svg_prefix__g)"
              xlinkHref="#YT_svg_prefix__h"
            />
            <use fill="url(#YT_svg_prefix__i)" xlinkHref="#YT_svg_prefix__h" />
          </g>
        </g>
        <g transform="translate(14 3)">
          <path
            d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
            fill="url(#YT_svg_prefix__j)"
          />
          <circle
            fillOpacity={0.3}
            fill="url(#YT_svg_prefix__k)"
            cx={1.75}
            cy={1.75}
            r={1}
          />
        </g>
        <g transform="matrix(-1 0 0 1 7 3)">
          <path
            d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
            fill="url(#YT_svg_prefix__j)"
          />
          <circle
            fillOpacity={0.3}
            fill="url(#YT_svg_prefix__k)"
            cx={1.75}
            cy={1.75}
            r={1}
          />
        </g>
        <path
          d="M9.634 5a1 1 0 101.732 0 1 1 0 01-1.732 0z"
          fill="url(#YT_svg_prefix__a)"
        />
        <path
          d="M9.5 9a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#YT_svg_prefix__l)"
        />
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
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
