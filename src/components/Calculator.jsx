import styled from "styled-components"
import React, { useState } from 'react';

const keys = ["AC","C","%","/",7,8,9,"*",4,5,6,"-",3,2,1,"+","**",0,".","="]
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
  flex: 1 0 40%;
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
  const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  `
  const Buttons = styled.div`
  flex: 1 0 21%;
  height: 3.5rem;
  box-shadow: none;
  border: none;
  display: flex;
  `
  const Button = styled.button`
  box-shadow:none;
  margin: auto;
  border: none;
  padding: 0rem;
  background: none;
  `
  return(
    <Calculator>
      <Display>
        <DisplayText >{val}</DisplayText>
      </Display>
      <ButtonsBox>{keys.map((item)=>(
        <Buttons>
          <Button onClick={clickHandler} key={item} style={{fontSize:"20px"}}>{item}</Button>
        </Buttons>
      ))}</ButtonsBox>
    </Calculator>
  )
}

export default Calculator