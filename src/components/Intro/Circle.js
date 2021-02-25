import { CircleStyled } from '../Intro/Intro.styled'


const Circle = (props) => {
  return (
    <CircleStyled>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" >
      <circle id="my-circle"  cx="25.34" cy="25.34" r="21.84" fill="none" stroke="#f36361"  strokeWidth="1"  strokeDasharray="360" strokeLinecap="round" transform="rotate(-90 ) translate(-50 0)"/>
      <animate 
    attributeName="stroke-dashoffset" values="360;0"
    dur="2s" begin={props.begin}
    />
    <set attributeName="visibility" from="hidden" to="visible" begin="0" dur="3s"/>
    </svg>
    </CircleStyled>
  )
}

export default Circle;