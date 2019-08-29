import React from 'react'
import PropTypes from 'prop-types'

const DO = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#083D7A" offset="0%"/><stop stop-color="#032F61" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#DF1E35" offset="0%"/><stop stop-color="#CC162C" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h9v6H0zM12 9h9v6h-9z"/><path fill="url(#c)" d="M0 9h9v6H0zM12 0h9v6h-9z"/><path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#a)"/><path d="M9.44 6.44a1.5 1.5 0 002.12 2.12 1.5 1.5 0 000-2.12" fill-opacity=".2" fill="#C93127"/><circle fill="#042F60" cx="10.5" cy="7.5" r="1"/><path d="M11.56 8.56a1.5 1.5 0 01-2.12-2.12l.353.353a1 1 0 101.414 0l.354-.354a1.5 1.5 0 010 2.122zm0 0a1.5 1.5 0 01-2.12-2.12l.353.353a1 1 0 101.414 0l.354-.354a1.5 1.5 0 010 2.122z" fill="#0F6D1A" fill-rule="nonzero"/></g></svg>
  )
}

DO.propTypes = {
  width: '21',
  height: '15',
}

export default DO