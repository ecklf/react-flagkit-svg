import React from 'react'
import PropTypes from 'prop-types'

const SV = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#1B57C4" offset="0%"/><stop stop-color="#154BAD" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#3C7839" offset="0%"/><stop stop-color="#31642E" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0zM0 10h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/><path d="M9.3 5.9a2 2 0 102.4 0L11 8h-1l-.7-2.1z" fill="url(#c)"/><path fill="#F9C92E" d="M10.5 5.5L11 8h-1z"/></g></svg>
  )
}

SV.propTypes = {
  width: '21',
  height: '15',
}

export default SV