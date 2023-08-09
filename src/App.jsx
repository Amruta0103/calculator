import './App.css';
import styled from 'styled-components';
import Calculator from './components/Calculator';
import logo from './assets/calculator-simple.svg';
// import Temp from './temp';

const App = () => { 
  return (
    <AppBox>
      <Header>
        <Logo src={logo} />
        Simply Calcy
      </Header>
      <Calculator />
      <Footer>Made with ♡ by Amruta D.</Footer>
    </AppBox>
  );
}

const AppBox = styled.div`
background: #1c2f2f;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;
height: 100vh;
width:100%;
`
const Header = styled.div`
color: #f5f5f5;
margin: 1rem auto;
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center
` 
const Logo = styled.img`
height: 1.5rem;
width: 1.5rem;
margin: 0 0.5rem 0;
`
const Footer = styled.div`
color: #9c9c9c;
margin: 0.7rem auto;
`

export default App;
