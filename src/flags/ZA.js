import React from 'react'
import PropTypes from 'prop-types'

const ZA = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#06A86E" offset="0%"/><stop stop-color="#007A4E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFBF2E" offset="0%"/><stop stop-color="#FFB612" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#F44E46" offset="0%"/><stop stop-color="#DF3931" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#072CB4" offset="0%"/><stop stop-color="#042396" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" d="M0 2l7 5.5L0 13z"/><path fill="url(#d)" d="M-1 2.25L5.75 7.5-1 12.75z"/><path fill="#FFF" d="M9 6L2 0h19v6z"/><path fill="url(#e)" d="M9.25 5l-6-5H21v5z"/><path fill="#FFF" d="M2 15h19V9H9z"/><path fill="url(#f)" d="M3.25 15H21v-5H9.25z"/></g></svg>
  )
}

ZA.propTypes = {
  width: '21',
  height: '15',
}

export default ZA