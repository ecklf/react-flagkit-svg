import React from 'react'
import PropTypes from 'prop-types'

const RW = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#2D754D" offset="0%"/><stop stop-color="#235F3E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#25B1EB" offset="0%"/><stop stop-color="#1AA3DC" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FAD546" offset="0%"/><stop stop-color="#FAD12F" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#EDC738" offset="0%"/><stop stop-color="#E5BE2A" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 11h21v4H0z"/><path fill="url(#c)" d="M0 0h21v7H0z"/><path fill="url(#d)" d="M0 7h21v4H0z"/><path fill="url(#e)" d="M16 4.5l-.765.848.058-1.14-1.14.057L15 3.5l-.848-.765 1.14.058-.057-1.14L16 2.5l.765-.848-.058 1.14 1.14-.057L17 3.5l.848.765-1.14-.058.057 1.14z"/></g></svg>
  )
}

RW.propTypes = {
  width: '21',
  height: '15',
}

export default RW