import styled, { css } from 'styled-components';



export const Section = styled.section`
  padding-top:80px;
  height:100vh;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color: ${({ theme }) => theme.blue };

  @media screen and (min-width: ${({ theme }) => theme.desktop}) {
    padding-top:100px;
  };
`

export const TextContent = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;

  @media screen and (min-width: ${({ theme }) => theme.desktop}) {
    width:60%
  };
`
export const Heading = styled.h2`
  font-size: 3rem;
  color:${({ theme }) => theme.yellow };
`

export const FeaturesList = styled.ul`
  position:relative;
  height:50vh;
  list-style:none;

  @media screen and (min-width: ${({ theme }) => theme.desktop}) {
    height:120px;
  }
`
function positionFeature(order) {
  switch(order) {
    case 'first':
      return css`
       top: 0;
       left: 0;
      `;
    case 'second' :
      return css`
      top:3rem;
      left:100px;
      
      @media screen and (min-width: ${({ theme }) => theme.desktop}) {
        top:70px;
        left: 100px;
      }
      `;
    case 'third':
      return css`
      top:6rem;
      left:10px;
      
      @media screen and (min-width: ${({ theme }) => theme.desktop}) {
        top:5px;
        left:250px;
      }
      `
    case 'fourth':
      return css`
      top:9rem;
      left: 170px;

      @media screen and (min-width: ${({ theme }) => theme.desktop}) {
        top:calc(100% - 40px);
        left: 350px;
      }
      `;
    case 'fifth':
      return css`
      top: 12rem;
      left:15px;

      @media screen and (min-width: ${({ theme }) => theme.desktop}) {
        top: 15px;
        left:500px;
      }
      `;
      default:
        return;
  }
}
export const Feature = styled.li`
  color:#fff;
  font-size:1.5rem;
  position:absolute;
  white-space:nowrap;
  ${props => positionFeature(props.order)}

  &:before {
    content:"";
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:-30px;
    width:25px;
    height:1.5px;
    background-color:#fff;
  }
`

export const Graphic = styled.div`

`