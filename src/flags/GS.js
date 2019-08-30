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
          id="GS_svg_prefix__k"
        >
          <stop stopColor="#FEC241" offset="0%" />
          <stop stopColor="#FEBB2C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__c"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__e"
        >
          <stop stopColor="#1E1E1E" offset="0%" />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__s"
        >
          <stop stopColor="#0F8012" offset="0%" />
          <stop stopColor="#0B6A0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__h"
        >
          <stop stopColor="#A2ADB0" offset="0%" />
          <stop stopColor="#8B9497" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__p"
        >
          <stop stopColor="#7F7D7D" offset="0%" />
          <stop stopColor="#656263" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__i"
        >
          <stop stopColor="#4F4F4F" offset="0%" />
          <stop stopColor="#2B2B2B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__b"
        >
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__l"
        >
          <stop stopColor="#A84B14" offset="0%" />
          <stop stopColor="#913F0E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__m"
        >
          <stop stopColor="#CFB063" offset="0%" />
          <stop stopColor="#BEA157" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__n"
        >
          <stop stopColor="#2D42FF" offset="0%" />
          <stop stopColor="#0B24FC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="0%"
          x2="100%"
          y2="50%"
          id="GS_svg_prefix__o"
        >
          <stop stopColor="#E3DC3D" offset="0%" />
          <stop stopColor="#CFC82A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GS_svg_prefix__t"
        >
          <stop stopColor="#FFCF44" offset="0%" />
          <stop stopColor="#FCC72E" offset="100%" />
        </linearGradient>
        <ellipse id="GS_svg_prefix__g" cx={0.5} cy={1.5} rx={1} ry={1.5} />
        <ellipse id="GS_svg_prefix__d" cx={0.5} cy={1.5} rx={1} ry={1.5} />
        <path
          d="M.007.506A.489.489 0 01.495 0h2.01c.273 0 .498.23.502.506L3.03 2.25a.52.52 0 01-.207.388l-1.095.722a.414.414 0 01-.417 0L.24 2.639a.526.526 0 01-.21-.388L.007.506z"
          id="GS_svg_prefix__q"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GS_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#GS_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#GS_svg_prefix__a)"
          fillRule="nonzero"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#GS_svg_prefix__c)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#GS_svg_prefix__a)"
        />
        <path fill="url(#GS_svg_prefix__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <g transform="translate(18 8)">
          <mask id="GS_svg_prefix__f" fill="#fff">
            <use xlinkHref="#GS_svg_prefix__d" />
          </mask>
          <use fill="url(#GS_svg_prefix__e)" xlinkHref="#GS_svg_prefix__d" />
          <ellipse
            fill="url(#GS_svg_prefix__a)"
            mask="url(#GS_svg_prefix__f)"
            cy={2}
            rx={1}
            ry={1.5}
          />
        </g>
        <g transform="translate(14 8)">
          <mask id="GS_svg_prefix__j" fill="#fff">
            <use xlinkHref="#GS_svg_prefix__g" />
          </mask>
          <use fill="url(#GS_svg_prefix__h)" xlinkHref="#GS_svg_prefix__g" />
          <ellipse
            fill="url(#GS_svg_prefix__i)"
            mask="url(#GS_svg_prefix__j)"
            cx={1}
            cy={2}
            rx={1}
            ry={1.5}
          />
        </g>
        <path
          d="M16.5 12.5c.828.5 1.5.276 1.5 0s-.672-.5-1.5-.5-1.5.224-1.5.5.672.5 1.5 0z"
          fill="url(#GS_svg_prefix__k)"
        />
        <circle fill="url(#GS_svg_prefix__a)" cx={18.5} cy={5.5} r={1} />
        <circle fill="url(#GS_svg_prefix__l)" cx={16.5} cy={4.5} r={1} />
        <circle fill="url(#GS_svg_prefix__m)" cx={16.5} cy={3.75} r={1} />
        <circle fill="url(#GS_svg_prefix__a)" cx={16.5} cy={11.5} r={1} />
        <circle fill="url(#GS_svg_prefix__a)" cx={14.5} cy={5.5} r={1} />
        <circle fill="url(#GS_svg_prefix__n)" cx={15} cy={6.5} r={1} />
        <circle fill="url(#GS_svg_prefix__n)" cx={18} cy={6.5} r={1} />
        <circle fill="url(#GS_svg_prefix__o)" cx={19} cy={8} r={1} />
        <path
          d="M16 7.5l-.5.5h2l-.5-.5.5-1.5s-.448-1-1-1-1 1-1 1l.5 1.5z"
          fill="url(#GS_svg_prefix__p)"
        />
        <path
          d="M16.5 6.5s.5-.112.5-.38c0-.008-.5-.12-.5-.12s-.5.112-.5.12c0 .268.5.38.5.38z"
          fill="#5D0543"
        />
        <g transform="translate(15 8)">
          <mask id="GS_svg_prefix__r" fill="#fff">
            <use xlinkHref="#GS_svg_prefix__q" />
          </mask>
          <use fill="url(#GS_svg_prefix__a)" xlinkHref="#GS_svg_prefix__q" />
          <circle
            fill="#225DA4"
            mask="url(#GS_svg_prefix__r)"
            cx={2.5}
            cy={2.5}
            r={1}
          />
          <circle
            fill="#225DA4"
            mask="url(#GS_svg_prefix__r)"
            cx={0.5}
            cy={1.5}
            r={1}
          />
          <path
            fill="url(#GS_svg_prefix__s)"
            mask="url(#GS_svg_prefix__r)"
            d="M0 0h3L1.5 3z"
          />
          <circle
            fill="url(#GS_svg_prefix__t)"
            mask="url(#GS_svg_prefix__r)"
            cx={1.5}
            cy={1.5}
            r={1}
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
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
