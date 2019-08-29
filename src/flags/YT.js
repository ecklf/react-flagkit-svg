import React from "react";
import PropTypes from "prop-types";

const YT = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="i">
          <stop stop-color="#E6402C" offset="0%" />
          <stop stop-color="#D1321F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
          <stop stop-color="#1B2CA9" offset="0%" />
          <stop stop-color="#132294" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="k">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="j">
          <stop stop-color="#D0D0D0" offset="0%" />
          <stop stop-color="#C4C4C4" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="l">
          <stop stop-color="#F7E04B" offset="0%" />
          <stop stop-color="#EAD135" offset="100%" />
        </linearGradient>
        <path
          d="M0 .491A.49.49 0 01.498 0h4.004A.5.5 0 015 .491v5.018a.535.535 0 01-.5.522S3 6 2.5 6.94C2 6 .5 6.03.5 6.03a.54.54 0 01-.5-.522V.491z"
          id="b"
        />
        <path id="h" d="M0 3h5v4H0z" />
        <path id="e" d="M0 0h5v3H0z" />
        <filter
          x="-15%"
          y="-18.8%"
          width="130%"
          height="137.5%"
          filterUnits="objectBoundingBox"
          id="g"
        >
          <feMorphology
            radius=".25"
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
          id="d"
        >
          <feMorphology
            radius=".25"
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
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <g transform="translate(8 4)">
          <mask id="c" fill="#fff">
            <use xlinkHref="#b" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#b" />
          <path
            stroke="#979797"
            d="M4.5.5V.491.5zm0 0h.002H4.5zm-4 0v5.009s.02.022-.01.022H.5c.342-.004.793.048 1.25.213.285.102.538.24.75.418.212-.178.465-.316.75-.418.444-.16.882-.214 1.22-.213.02-.005.03-.017.03-.022V.5s0 0 0 0h-4z"
          />
          <g mask="url(#c)">
            <use fill="#000" filter="url(#d)" xlinkHref="#e" />
            <use fill="url(#f)" xlinkHref="#e" />
          </g>
          <g mask="url(#c)">
            <use fill="#000" filter="url(#g)" xlinkHref="#h" />
            <use fill="url(#i)" xlinkHref="#h" />
          </g>
        </g>
        <g transform="translate(14 3)">
          <path
            d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95s1.341.457 1.74-.245c0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
            fill="url(#j)"
          />
          <circle fill-opacity=".3" fill="url(#k)" cx="1.75" cy="1.75" r="1" />
        </g>
        <g transform="matrix(-1 0 0 1 7 3)">
          <path
            d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95s1.341.457 1.74-.245c0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
            fill="url(#j)"
          />
          <circle fill-opacity=".3" fill="url(#k)" cx="1.75" cy="1.75" r="1" />
        </g>
        <path d="M9.634 5a1 1 0 101.732 0 1 1 0 01-1.732 0z" fill="url(#a)" />
        <path
          d="M9.5 9a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#l)"
        />
      </g>
    </svg>
  );
};

YT.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

YT.propTypes = {
  width: "21",
  height: "15",
};

export default YT;
