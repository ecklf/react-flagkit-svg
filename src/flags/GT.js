import React from 'react'
import PropTypes from 'prop-types'

const GT = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#63AEE3" offset="0%"/><stop stop-color="#4998D0" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M10 0h11v15H10zM0 0h7v15H0z"/><path fill="url(#a)" d="M7 0h7v15H7z"/><path d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 00.502-.865A1.499 1.499 0 019 7a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 0013 7a.5.5 0 10-1 0c0 .518-.264.99-.693 1.265a.5.5 0 10.539.842z" fill="#628A40" fill-rule="nonzero"/><circle fill="#DCC26D" cx="10.5" cy="7" r="1"/></g></svg>
  )
}

GT.propTypes = {
  width: '21',
  height: '15',
}

export default GT