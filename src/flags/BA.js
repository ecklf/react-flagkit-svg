import React from 'react'
import PropTypes from 'prop-types'

const BA = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0B36B2" offset="0%"/><stop stop-color="#042993" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFD045" offset="0%"/><stop stop-color="#FECA2F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" d="M17 15V0H6.5z"/><path fill="url(#a)" d="M13 14l-.707.207.207-.707-.207-.707L13 13l.707-.207-.207.707.207.707zM11 11l-.707.207.207-.707-.207-.707L11 10l.707-.207-.207.707.207.707zM9 8l-.707.207L8.5 7.5l-.207-.707L9 7l.707-.207L9.5 7.5l.207.707zM7 5l-.707.207L6.5 4.5l-.207-.707L7 4l.707-.207L7.5 4.5l.207.707zM5 2l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707z"/></g></svg>
  )
}

BA.propTypes = {
  width: '21',
  height: '15',
}

export default BA