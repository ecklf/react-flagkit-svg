import React from 'react'
import PropTypes from 'prop-types'

const MV = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F32249" offset="0%"/><stop stop-color="#D01739" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#15A04F" offset="0%"/><stop stop-color="#0F7E3D" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><rect fill="url(#c)" x="3" y="3" width="15" height="9" rx=".5"/><path d="M12.25 4.08a3.5 3.5 0 100 6.839 3.501 3.501 0 010-6.838z" fill="url(#a)"/></g></svg>
  )
}

MV.propTypes = {
  width: '21',
  height: '15',
}

export default MV