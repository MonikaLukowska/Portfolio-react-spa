import React from 'react';
import {Icon, StyledBlock} from './Block.styled.js'

const Block = (props) => {
  return (
  <StyledBlock 
    width={{md: 1 / 2}} 
    borderTop={props.borderTop} 
    borderBottom={props.borderBottom} 
    borderLeft={props.borderLeft} 
    borderRight={props.borderRight}>
    <Icon>
      <img src={props.icon} alt="" role="presentation" />
    </Icon>
    <h3 className="site-header site-header--small">{props.heading}</h3>
    <p className="generic">{props.content}</p>
  </StyledBlock>
    
  )
}

export default Block
