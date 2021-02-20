import  styled from 'styled-components';
import { border, layout } from 'styled-system';

export const StyledBlock = styled.div(
  {
  textAlign:'center',
  display:'flex',
  flexDirection:'column',
  },
  layout,
  border,
)

export const Icon = styled.div`
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
  max-width:50px;
`