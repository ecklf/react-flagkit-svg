import React from 'react'
import PropTypes from 'prop-types'

const MS = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#07319C" offset="0%"/><stop stop-color="#00247E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#DB1E36" offset="0%"/><stop stop-color="#D51931" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#08B9D6" offset="0%"/><stop stop-color="#00A3BE" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><path d="M0 3.5V1c0-.553.444-1 1-1h3c.552 0 1 .441 1 1v2.5C5 6 2.5 7 2.5 7S0 6 0 3.5z" id="d"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z" fill="url(#a)" fill-rule="nonzero"/><path d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z" fill="url(#c)"/><path d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z" fill="url(#a)"/><path fill="url(#c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z"/><g transform="translate(13 4)"><mask id="f" fill="#fff"><use xlink:href="#d"/></mask><use fill="url(#e)" xlink:href="#d"/><path fill="#A63D09" mask="url(#f)" d="M0 5h5v2H0z"/><path d="M3 2V1H2v1H1v1h1v2h1V3h1V2H3z" fill="url(#g)" mask="url(#f)"/></g></g></svg>
  )
}

MS.propTypes = {
  width: '21',
  height: '15',
}

export default MS