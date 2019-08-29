import React from 'react'
import PropTypes from 'prop-types'

const PH = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#DD1C34" offset="0%"/><stop stop-color="#CC162C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#0D4BC3" offset="0%"/><stop stop-color="#073DA6" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FDD64D" offset="0%"/><stop stop-color="#FCD036" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 7h21v8H0z"/><path fill="url(#c)" d="M0 0h21v7H0z"/><path fill="url(#a)" d="M0 0l10 7.5L0 15z"/><path d="M3.4 8.495L2.542 9.81l.325-1.535c-.052-.043-.1-.09-.143-.143l-1.535.325L2.505 7.6a1.012 1.012 0 010-.202L1.19 6.543l1.535.325c.043-.052.09-.1.143-.143L2.543 5.19 3.4 6.505a1.012 1.012 0 01.202 0l.856-1.315-.325 1.535c.052.043.1.09.143.143l1.535-.325-1.315.856a1.012 1.012 0 010 .202l1.315.856-1.535-.325c-.043.052-.09.1-.143.143l.325 1.535L3.6 8.495a1.012 1.012 0 01-.202 0zM7.5 8a.5.5 0 110-1 .5.5 0 010 1zm-6-5a.5.5 0 110-1 .5.5 0 010 1zm0 10a.5.5 0 110-1 .5.5 0 010 1z" fill="url(#d)"/></g></svg>
  )
}

PH.propTypes = {
  width: '21',
  height: '15',
}

export default PH