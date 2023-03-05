import './App.css';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const App = () => {
  const App = styled.div`
  background: #1c2f2f;
  display:flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
  width:100%;
  `
  return (
    <App>
      <Calculator />
    </App>
  );
}

export default App;