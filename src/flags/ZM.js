import React from "react";
import PropTypes from "prop-types";

const ZM = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="b">
          <stop stop-color="#2A8815" offset="0%" />
          <stop stop-color="#35A51D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#EF8A34" offset="0%" />
          <stop stop-color="#EC7E21" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#F48D36" offset="0%" />
          <stop stop-color="#EC7E21" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
          <stop stop-color="#EC322B" offset="0%" />
          <stop stop-color="#DB261F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path
          d="M16.196 3.624s-.403.153-.834 0c-.342-.122-.687-.534-.97-.677-.164-.083.14-.478-.184-.371-.325.106-.855-.39-.855-.39s-.548-.667.259-.667 2.51.58 2.51.58.063-.3.202-.438.242-.265.47-.23c.227.034.353.355.353.355l-.354.135v.266s2.362-.724 2.92-.668c.558.056.109.669-.228 1.057-.13.15-.556.456-.815.21-.259-.245-.163.266-.43.43-.438.27-.602.516-.753.587-.15.072-.479 0-.479 0l.096.247s.027.296-.096.414-.208.202-.508.166c-.3-.035-.441.04-.541-.29-.1-.33.237-.716.237-.716zm.247-.342v.772l.339-.284-.34-.488z"
          fill="url(#c)"
        />
        <path fill="url(#d)" d="M18 6h3v9h-3z" />
        <path fill="url(#e)" d="M15 6h3v9h-3z" />
        <path fill="url(#f)" d="M12 6h3v9h-3z" />
      </g>
    </svg>
  );
};

ZM.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZM.propTypes = {
  width: "21",
  height: "15",
};

export default ZM;
