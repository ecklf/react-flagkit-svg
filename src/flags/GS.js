import React from "react";
import PropTypes from "prop-types";

const GS = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#07319C" offset="0%" />
          <stop stop-color="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#DB1E36" offset="0%" />
          <stop stop-color="#D51931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#1E1E1E" offset="0%" />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="s">
          <stop stop-color="#0F8012" offset="0%" />
          <stop stop-color="#0B6A0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="h">
          <stop stop-color="#A2ADB0" offset="0%" />
          <stop stop-color="#8B9497" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="p">
          <stop stop-color="#7F7D7D" offset="0%" />
          <stop stop-color="#656263" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="i">
          <stop stop-color="#4F4F4F" offset="0%" />
          <stop stop-color="#2B2B2B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="k">
          <stop stop-color="#FEC241" offset="0%" />
          <stop stop-color="#FEBB2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="l">
          <stop stop-color="#A84B14" offset="0%" />
          <stop stop-color="#913F0E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="m">
          <stop stop-color="#CFB063" offset="0%" />
          <stop stop-color="#BEA157" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="n">
          <stop stop-color="#2D42FF" offset="0%" />
          <stop stop-color="#0B24FC" offset="100%" />
        </linearGradient>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="50%" id="o">
          <stop stop-color="#E3DC3D" offset="0%" />
          <stop stop-color="#CFC82A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="t">
          <stop stop-color="#FFCF44" offset="0%" />
          <stop stop-color="#FCC72E" offset="100%" />
        </linearGradient>
        <ellipse id="g" cx=".5" cy="1.5" rx="1" ry="1.5" />
        <ellipse id="d" cx=".5" cy="1.5" rx="1" ry="1.5" />
        <path
          d="M.007.506A.489.489 0 01.495 0h2.01c.273 0 .498.23.502.506L3.03 2.25a.52.52 0 01-.207.388l-1.095.722a.414.414 0 01-.417 0L.24 2.639a.526.526 0 01-.21-.388L.007.506z"
          id="q"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#a)"
          fill-rule="nonzero"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#c)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#a)"
        />
        <path fill="url(#c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <g transform="translate(18 8)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#d" />
          </mask>
          <use fill="url(#e)" xlinkHref="#d" />
          <ellipse fill="url(#a)" mask="url(#f)" cy="2" rx="1" ry="1.5" />
        </g>
        <g transform="translate(14 8)">
          <mask id="j" fill="#fff">
            <use xlinkHref="#g" />
          </mask>
          <use fill="url(#h)" xlinkHref="#g" />
          <ellipse
            fill="url(#i)"
            mask="url(#j)"
            cx="1"
            cy="2"
            rx="1"
            ry="1.5"
          />
        </g>
        <path
          d="M16.5 12.5c.828.5 1.5.276 1.5 0s-.672-.5-1.5-.5-1.5.224-1.5.5.672.5 1.5 0z"
          fill="url(#k)"
        />
        <circle fill="url(#a)" cx="18.5" cy="5.5" r="1" />
        <circle fill="url(#l)" cx="16.5" cy="4.5" r="1" />
        <circle fill="url(#m)" cx="16.5" cy="3.75" r="1" />
        <circle fill="url(#a)" cx="16.5" cy="11.5" r="1" />
        <circle fill="url(#a)" cx="14.5" cy="5.5" r="1" />
        <circle fill="url(#n)" cx="15" cy="6.5" r="1" />
        <circle fill="url(#n)" cx="18" cy="6.5" r="1" />
        <circle fill="url(#o)" cx="19" cy="8" r="1" />
        <path
          d="M16 7.5l-.5.5h2l-.5-.5.5-1.5s-.448-1-1-1-1 1-1 1l.5 1.5z"
          fill="url(#p)"
        />
        <path
          d="M16.5 6.5s.5-.112.5-.38c0-.008-.5-.12-.5-.12s-.5.112-.5.12c0 .268.5.38.5.38z"
          fill="#5D0543"
        />
        <g transform="translate(15 8)">
          <mask id="r" fill="#fff">
            <use xlinkHref="#q" />
          </mask>
          <use fill="url(#a)" xlinkHref="#q" />
          <circle fill="#225DA4" mask="url(#r)" cx="2.5" cy="2.5" r="1" />
          <circle fill="#225DA4" mask="url(#r)" cx=".5" cy="1.5" r="1" />
          <path fill="url(#s)" mask="url(#r)" d="M0 0h3L1.5 3z" />
          <circle fill="url(#t)" mask="url(#r)" cx="1.5" cy="1.5" r="1" />
        </g>
      </g>
    </svg>
  );
};

GS.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GS.propTypes = {
  width: "21",
  height: "15",
};

export default GS;
