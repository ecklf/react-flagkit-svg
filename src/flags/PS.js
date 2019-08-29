import React from 'react'
import PropTypes from 'prop-types'

const PS = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#20934F" offset="0%"/><stop stop-color="#197940" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#E62539" offset="0%"/><stop stop-color="#CA1A2C" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 10h21v5H0z"/><path fill="url(#c)" d="M0 0h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/><path fill="url(#d)" d="M0 0l10 7.5L0 15z"/></g></svg>
  )
}

PS.propTypes = {
  width: '21',
  height: '15',
}

export default PS