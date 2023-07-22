import './App.css';
import styled from 'styled-components';
import Calculator from './components/Calculator';
import logo from './assets/calculator-simple.svg';
// import Temp from './temp';

const App = () => {
  const App = styled.div`
  background: #1c2f2f;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100%;
  `
  const Header = styled.div`
  color: #f5f5f5;
  margin: auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center
  ` 
  const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 0.8rem 0;
  `
  const Footer = styled.div`
  color: #f5f5f5;
  margin: auto;
  ` 

  return (
    <App>
      <Header>
        <Logo src={logo} />
        Simply Calcy
      </Header>
      <Calculator />
      <Footer>Made with ♡ by Amruta D.</Footer>
    </App>
  );
}

export default App;
