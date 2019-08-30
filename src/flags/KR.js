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
          id="KR_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KR_svg_prefix__c"
        >
          <stop stopColor="#E01B41" offset="0%" />
          <stop stopColor="#C51335" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KR_svg_prefix__d"
        >
          <stop stopColor="#0E4B9C" offset="0%" />
          <stop stopColor="#053677" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KR_svg_prefix__f"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <circle id="KR_svg_prefix__b" cx={3.5} cy={3.5} r={3.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#KR_svg_prefix__a)" d="M0 0h21v15H0z" />
        <g transform="translate(7 4)">
          <mask id="KR_svg_prefix__e" fill="#fff">
            <use xlinkHref="#KR_svg_prefix__b" />
          </mask>
          <use fill="url(#KR_svg_prefix__c)" xlinkHref="#KR_svg_prefix__b" />
          <path
            d="M0 4c1 .937 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H0s-1-3.937 0-3z"
            fill="url(#KR_svg_prefix__d)"
            mask="url(#KR_svg_prefix__e)"
          />
        </g>
        <path
          d="M14.208 3.922a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm1.3-.75a.25.25 0 01.09-.347l.429-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm-12.125 7a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm1.299-.75a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095L4.682 9.422zm10.77-.5a.25.25 0 01.347-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 01-.346.095l-.43-.248a.254.254 0 01-.09-.347l1.244-2.156zm1.3.75a.25.25 0 01.346-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 01-.346.095l-.43-.248a.254.254 0 01-.09-.347l1.244-2.156zm-12.125-7a.25.25 0 01.346-.095l.43.248c.12.07.16.225.09.347L4.249 5.328a.25.25 0 01-.347.095l-.429-.248a.254.254 0 01-.09-.347l1.244-2.156zm1.299.75a.25.25 0 01.346-.095l.43.248c.12.07.16.225.09.347L5.548 6.078a.25.25 0 01-.347.095l-.429-.248a.254.254 0 01-.09-.347l1.244-2.156z"
          fill="url(#KR_svg_prefix__f)"
          opacity={0.75}
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
