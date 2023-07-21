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
  background: #ebebeb;
  `
  const Display = styled.div`
  height: 200px;
  width: inherit;
  position: relative;
  background: transparent;
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
  display: flex;
  `
  const Keys =styled.div`
  display: flex;
  flex-wrap: wrap;
  `
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 0.25;
  `
  const ColButtons = styled.button`
  font-size: 20px;
  box-shadow: none;
  border: none;
  height: 3.5rem;
  flex: 1;
  background: #ebebeb;
  `
  const Buttons = styled.button`
  flex: 1 0 33%;
  font-size: 20px;
  box-shadow: none;
  border: none;
  height: 3.5rem;
  background: #ebebeb;
  align-items:center;
  `
  const CoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  background: #ffffff;
  `
  const SideButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  background: #d6d6d6;
  `
  
  return(
    <Calculator>
      <Display>
        <DisplayText >{val}</DisplayText>
      </Display>
      <FlexBoxMain>
        <FlexBoxSub>
          <Row>
            {row.map((r)=>(
              <Buttons onClick={clickHandler}>
                <SideButton>{r}</SideButton>
              </Buttons>
            ))}
          </Row>
          <Keys>
            {keys.map((k)=>(
              <Buttons onClick={clickHandler}>
                <CoreButton>{k}</CoreButton>
              </Buttons>
            ))}
          </Keys>
        </FlexBoxSub>
        <Column>
          {col.map((c)=>(
             <ColButtons onClick={clickHandler}>
              <SideButton>{c}</SideButton>
             </ColButtons>
          ))}
        </Column>
      </FlexBoxMain>
    </Calculator>
  )
}

export default Calculator