import React from 'react'
import PropTypes from 'prop-types'

const NC = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#094CC7" offset="0%"/><stop stop-color="#003CAB" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#2AAD55" offset="0%"/><stop stop-color="#219447" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#F65D55" offset="0%"/><stop stop-color="#E9443C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#FAE749" offset="0%"/><stop stop-color="#FBE533" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#d)" d="M0 5h21v5H0z"/><circle fill="url(#e)" cx="10.5" cy="7.5" r="3.5"/><path d="M10.092 6.211a.5.5 0 10.514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 110-1 .5.5 0 010 1zm0-1a.5.5 0 110-1 .5.5 0 010 1z" fill="url(#f)"/></g></svg>
  )
}

NC.propTypes = {
  width: '21',
  height: '15',
}

export default NC