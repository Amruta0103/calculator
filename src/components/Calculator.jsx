import styled from "styled-components"

const mylist = ["AC","←","%","÷",7,8,9,"x",4,5,6,"-",3,2,1,"+","^",0,".","="]
const Calculator = () => {
  const Calculator = styled.div`
  height: 600px;
  width: 400px;
  border: 1px solid #808080;
  box-shadow: 3px 3px #808080;
  `
  const Display = styled.div`
  height: 300px;
  background: #0080FF;
  width: inherit;
  position: relative;
  `

  const DisplayText = styled.div`
  color: black;
  position: absolute;
  right:0;
  bottom:0;
  text-align: end;
  margin: 1rem;
  `
  const Buttons = styled.div`
  margin: auto;
  `
  const Button = styled.button`
  height: 4.7rem;
  width: 5rem;
  `

  return(
    <Calculator>
      <Display>
        <DisplayText >Hello <br />goodbye</DisplayText>
      </Display>
      <Buttons>{mylist.map((item)=>(
        <Button key={item} style={{fontSize:"20px"}}>{item}</Button>
      ))}</Buttons>
    </Calculator>
  )
}

export default Calculator