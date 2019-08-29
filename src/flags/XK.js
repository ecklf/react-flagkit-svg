import React from 'react'
import PropTypes from 'prop-types'

const XK = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#2F5FBF" offset="0%"/><stop stop-color="#244EA3" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E9C072" offset="0%"/><stop stop-color="#CFA557" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M9 3.5l-.707.207L8.5 3l-.207-.707L9 2.5l.707-.207L9.5 3l.207.707L9 3.5zm3 0l-.707.207L11.5 3l-.207-.707L12 2.5l.707-.207L12.5 3l.207.707L12 3.5zm3 1l-.707.207L14.5 4l-.207-.707L15 3.5l.707-.207L15.5 4l.207.707L15 4.5zm2 2l-.707.207L16.5 6l-.207-.707L17 5.5l.707-.207L17.5 6l.207.707L17 6.5zm-13 0l-.707.207L3.5 6l-.207-.707L4 5.5l.707-.207L4.5 6l.207.707L4 6.5zm2-2l-.707.207L5.5 4l-.207-.707L6 3.5l.707-.207L6.5 4l.207.707L6 4.5z" fill="url(#a)"/><path fill="url(#c)" d="M9 10l-1-.5-1-2h1l1-1 .5-1 1-.5.5.5 1 .5v.5l.5.5L14 8l-.5 1.5L12 11l-.5-1-1.5 1v1l-.5-.5z"/></g></svg>
  )
}

XK.propTypes = {
  width: '21',
  height: '15',
}

export default XK