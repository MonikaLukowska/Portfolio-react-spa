import React from 'react';
import {Icon, StyledBlock} from './Block.styled.js'

const Block = (props) => {
  return (
  <StyledBlock>
    <Icon>
      <img src={props.icon} alt="" role="presentation" />
    </Icon>
    <h3 className="site-header site-header--small">{props.heading}</h3>
    <p className="generic">{props.content}</p>
  </StyledBlock>
    
  )
}

export default Block
