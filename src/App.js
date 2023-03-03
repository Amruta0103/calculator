import './App.css';
import styled from 'styled-components';
import Calculator from './components/Calculator';
// import Temp from './temp';

const App = () => {
  const App = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
  width:100%;
  `
  return (
    <App>
      <Calculator />
      {/* <Temp /> */}
    </App>
  );
}

export default App;
