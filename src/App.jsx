import './App.css';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const App = () => {
  const App = styled.div`
  background: #1c2f2f;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items: center;
  height: 100vh;
  width:100%;
  `
  
  return (
    <App>
      {/* <Title>Simply-Calcy</Title> */}
      <Calculator />
    </App>
  );
}

export default App;
