import React from "react";
import PropTypes from "prop-types";

const GB = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#0A17A7" offset="0%" />
          <stop stop-color="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#E6273E" offset="0%" />
          <stop stop-color="#CF152B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M-.002 0h21v15h-21z" />
        <path
          d="M5.003 10H-.002V5h5.005L-2.082.22l1.118-1.657 8.962 6.045V-1h5v5.608l8.962-6.045L23.078.22 15.993 5h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045V16h-5v-5.608l-8.962 6.045-1.118-1.658L5.003 10z"
          fill="url(#a)"
        />
        <path
          d="M14.136 4.958l9.5-6.25a.25.25 0 00-.275-.417l-9.5 6.25a.25.25 0 10.275.417zM14.868 10.48l8.515 5.74a.25.25 0 10.28-.415l-8.516-5.74a.25.25 0 00-.279.415zM6.142 4.526L-2.74-1.461a.25.25 0 00-.28.415L5.863 4.94a.25.25 0 00.279-.414zM6.827 9.995l-9.845 6.53a.25.25 0 10.276.416l9.846-6.529a.25.25 0 00-.277-.417z"
          fill="#DB1F35"
          fill-rule="nonzero"
        />
        <path fill="url(#c)" d="M-.002 9h9v6h3V9h9V6h-9V0h-3v6h-9z" />
      </g>
    </svg>
  );
};

GB.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GB.defaultProps = {
  width: "21",
  height: "15",
};

export default GB;
