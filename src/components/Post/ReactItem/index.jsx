import React from 'react'
import { ReactItemStyle } from './style'

const ReactItem = ({children, width, small}) => {
  return (
    <ReactItemStyle width={width} small={small}>
      {children}
    </ReactItemStyle>
  )
}

export default ReactItem
