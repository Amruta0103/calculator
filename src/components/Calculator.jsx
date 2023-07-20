import styled from "styled-components"
import React, { useState } from 'react';

const row = ["AC","C","%"]
const col = ["/","*","-","+","="]
const keys = [7,8,9,4,5,6,3,2,1,"**",0,"."]
const Calculator = () => {
  const [val, setVal] = useState('');

  const clickHandler = (e) => {
    let buttonValue = e.target.innerText;
    if(buttonValue === "="){
      // eslint-disable-next-line
      let finalValue = eval(val)
      setVal(finalValue);
    }
    else if(buttonValue === "C"){
      setVal(val.slice(0,-1))
    }
    else if(buttonValue === "AC"){
      setVal('');
    }
    else{
      setVal(val + buttonValue);
    }
  }

  const Calculator = styled.div`
  height: 500px;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #fefefe;
  `
  const Display = styled.div`
  flex: 1 0 35%;
  width: inherit;
  position: relative;
  `
  const DisplayText = styled.div`
  color: black;
  position: absolute;
  right:0;
  bottom:0;
  font-size: 20px;
  text-align: end;
  margin: 1rem;
  `
  const FlexBoxMain = styled.div`
  display: flex;
  `
  const FlexBoxSub = styled.div`
  margin: 0rem;
  flex: 1;
  `
  const Row = styled.div`
  display:flex;
  `
  const Keys =styled.div`
  display:flex;
  flex-wrap: wrap;
  `
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.25
  `
  const Cols = styled.button`
  flex: 1 0 20%;
  box-shadow: none;
  border: none;
  `
  const Buttons = styled.button`
  flex: 1 0 33%;
  font-size: 20px;
  height: 3.5rem;
  box-shadow: none;
  border: none;
  `
  return(
    <Calculator>
      <Display>
        <DisplayText >{val}</DisplayText>
      </Display>
      {/* <ButtonsBox>{keys.map((item)=>(
        <Buttons>
          <Button onClick={clickHandler} key={item} style={{fontSize:"20px"}}>{item}</Button>
        </Buttons>
      ))}</ButtonsBox> */}
      <FlexBoxMain>
        <FlexBoxSub>
          <Row>
            {row.map((r)=>(
              <Buttons onClick={clickHandler}>{r}</Buttons>
            ))}
          </Row>
          <Keys>
            {keys.map((k)=>(
              <Buttons onClick={clickHandler}>{k}</Buttons>
            ))}
          </Keys>
        </FlexBoxSub>
        <Column>
          {col.map((c)=>(
            <Cols onClick={clickHandler}>{c}</Cols>
          ))}
        </Column>
      </FlexBoxMain>
    </Calculator>
  )
}

export default Calculator