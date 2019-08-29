import React from 'react'
import PropTypes from 'prop-types'

const MW = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E42038" offset="0%"/><stop stop-color="#CC162C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#47B849" offset="0%"/><stop stop-color="#399E3B" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><circle fill="url(#c)" cx="10.5" cy="5.5" r="3.5"/><path fill="url(#c)" d="M0 5h21v5H0z"/><path fill="url(#d)" d="M0 10h21v5H0z"/></g></svg>
  )
}

MW.propTypes = {
  width: '21',
  height: '15',
}

export default MW