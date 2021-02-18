import  styled, { css } from 'styled-components';

export const StyledBlock = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;

  @media screen and (min-width: ${({ theme }) => theme.desktopM}) {
    width:50%
    ${props => props.border === "topLeft" && css `
      porder-top:solid 1px ${({ theme }) => theme.blue };
      border-left: solid 1px ${({ theme }) => theme.blue };
    `}
    ${props => props.border === "bottomRight" && css `
      porder-bottom:solid 1px ${({ theme }) => theme.blue };
      border-right: solid 1px ${({ theme }) => theme.blue };
    `}

  };
`

export const Icon = styled.div`
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
  max-width:50px;
`