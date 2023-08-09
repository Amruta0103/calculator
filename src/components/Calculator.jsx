import styled from "styled-components"
import React, { useState } from 'react';

const row = ["AC","C","%"]
const col = ["/","*","-","+","="]
const keys = [7,8,9,4,5,6,3,2,1,"**",0,"."]
const Calculator = () => {
  const [input, setInput] = useState('');
  const [val, setVal] = useState();

  const keybrs = (e) => {
    // // MAKE NESTED IF STATEMENT AND TRY THIS STUPID FUNCTION OUT
    // console.log(e.key,"=>",e.keyCode)
    // if((e.keyCode < 46 || e.keyCode > 57) && (e.keyCode === 187  && e.keyCode=== 189 && e.keyCode === 107 && e.keyCode === 16 && e.keyCode === 191)
    // && e.keyCode === 8 && e.keyCode === 17 && e.keyCode === 16
    // ){
      // e.preventDefault();
      // console.log(e.key);
    // }
    // if((e.keyCode > 57 || e.keyCode < 164) && (e.keyCode > 16 ||e.keyCode < 48)){
    //   e.preventDefault();
    // }
  }

  const clickHandler = (e) => {
    let buttonValue = e.target.innerText;
    // console.log("this is input:",input);
    if(buttonValue === "="){
      // eslint-disable-next-line
      let finalValue = eval(input);
      // console.log("Ek",input)
      // setInput(input.substring(0,input.length-1));
      // console.log("temp", input,"\n","val",finalValue);
      setVal(finalValue);
    }
    else if(buttonValue === "C"){
      setInput(input.slice(0,-1))
    }
    else if(buttonValue === "AC"){
      setInput('');
      setVal('');
    }
    else{
      setInput(input + buttonValue);
    }
  }
  
  return(
    <CalculatorBox>
      <Display>
        <DisplayBox >
          <DisplayText>
            <InputVal contentEditable={true} onKeyDown={keybrs}>{input}</InputVal>
            <OutputVal>{val}</OutputVal>
          </DisplayText>
        </DisplayBox>
      </Display>
      <FlexBoxMain>
        <FlexBoxSub>
          <Row>
            {row.map((r)=>(
              <WrapButtons key={r} onClick={clickHandler}>
                <SideBgButton>{r}</SideBgButton>
              </WrapButtons>
            ))}
          </Row>
          <Keys>
            {keys.map((k)=>(
              <WrapButtons key={k} onClick={clickHandler} >
                <NoBgButton>{k}</NoBgButton>
              </WrapButtons>
            ))}
          </Keys>
        </FlexBoxSub>
        <Column>
          {col.map((c)=>(
            <ColButtons key={c} onClick={clickHandler}>
              <SideBgButton>{c}</SideBgButton>
            </ColButtons>
          ))}
        </Column>
      </FlexBoxMain>
    </CalculatorBox>
  )
}

const CalculatorBox = styled.div`
height: 30rem;
width: 18rem;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
background: #e0e0e0;
border-radius: 1rem;
`
const Display = styled.div`
display: flex;
margin: auto;
width: 95%;
background: transparent;
border-radius: 1rem 1rem 0 0;
font-family: 'Orbitron', sans-serif;
`
const DisplayBox = styled.div`
width: 100%;
height: 7rem;
overflow-wrap: break-word;
color: black;
text-align: right;
margin: auto;
border: 1px solid black;
border-radius: 1rem;
padding: 0.5rem;
`
const DisplayText = styled.div`
width: inherit;
height: inherit;
margin: auto;
position: relative;
`
const InputVal = styled.div`
font-size: 18px;
&:focus {
  border: 1px solid transparent;
  outline: none;
}
`
const OutputVal = styled.div`
font-size: 22px;
position: absolute;
bottom: 0;
right: 0;
`
const FlexBoxMain = styled.div`
display: flex;
margin: auto;
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
font-size: 18px;
box-shadow: none;
height: 3.5rem;
flex: 1;
background: transparent;
border: 1px solid transparent;
border-radius: 1rem;
font-family: 'Orbitron', sans-serif;
`
const WrapButtons = styled.button`
flex: 1 0 33%;
font-size: 18px;
box-shadow: none;
border: 1px solid transparent;
border-radius: 1rem;
height: 3.5rem;
background: transparent;
align-items:center;
font-family: 'Orbitron', sans-serif;
`
const NoBgButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: auto;
height: 2.5rem;
width: 2.5rem;
border-radius: 2rem;
border: 1px solid transparent;
background: #f5f5f5;
`
const SideBgButton = styled(NoBgButton)`
background: #cccccc;
`

export default Calculator;