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
      console.log("ye equal to sign hai")
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
  height: 450px;
  width: 300px;
  border: 1px solid #080808;
  border-radius: 1rem 1rem 0 0;
  `
  const Display = styled.div`
  height: 150px;
  background: #00ff7f;
  width: inherit;
  position: relative;
  border-radius: 1rem 1rem 0 0;
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
  height: 60px;
  width: 75px;
  `

  return(
    <Calculator>
      <Display>
        <DisplayText >{val}</DisplayText>
      </Display>
      <Buttons>{keys.map((item)=>(
        <Button onClick={clickHandler} key={item} style={{fontSize:"20px"}}>{item}</Button>
      ))}</Buttons>
    </Calculator>
  )
}

export default Calculator