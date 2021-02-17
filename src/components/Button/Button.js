import styled from 'styled-components';

const Button = styled.button`
  width:100px;
  height:100px;
  border-radius:50%;
  border:none;
  outline:none;
  coursor:pointer;
  text-transform:uppercase;
  background-color:${props => props.blue ? props.theme.blue : props.theme.yellow };
  color:${props => props.blue ? props.theme.yellow : props.theme.blue }
`

export default Button