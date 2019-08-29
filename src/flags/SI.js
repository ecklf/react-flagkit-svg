import React from 'react'
import PropTypes from 'prop-types'

const SI = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0C47B7" offset="0%"/><stop stop-color="#073DA4" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E53B35" offset="0%"/><stop stop-color="#D32E28" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 3h21v7H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path d="M0 5V0h21v5H6.933V4s-.705-.5-1.433-.5C4.772 3.5 4 4 4 4v1H0zm5.5 2a1 1 0 110-2 1 1 0 010 2z" fill="url(#a)"/></g></svg>
  )
}

SI.propTypes = {
  width: '21',
  height: '15',
}

export default SI