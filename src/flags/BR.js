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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BR_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BR_svg_prefix__b">
          <stop stopColor="#05AB41" offset="0%" />
          <stop stopColor="#019C39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BR_svg_prefix__d">
          <stop stopColor="#053087" offset="0%" />
          <stop stopColor="#012877" offset="100%" />
        </linearGradient>
        <circle id="BR_svg_prefix__c" cx={3.5} cy={3.5} r={3.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BR_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#BR_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M2.422 7.773c-.233-.15-.228-.398 0-.546l7.656-4.954a.85.85 0 01.844 0l7.656 4.954c.233.15.228.398 0 .546l-7.656 4.954a.85.85 0 01-.844 0L2.422 7.773z"
          fill="#FDD216"
        />
        <g transform="translate(7 4)">
          <mask id="BR_svg_prefix__e" fill="#fff">
            <use xlinkHref="#BR_svg_prefix__c" />
          </mask>
          <use fill="url(#BR_svg_prefix__d)" xlinkHref="#BR_svg_prefix__c" />
          <path
            d="M-.1 2.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.629.777.389-.314z"
            fill="#FFF"
            fillRule="nonzero"
            mask="url(#BR_svg_prefix__e)"
          />
        </g>
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15"
};
export default SvgComponent;
