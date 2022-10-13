import './App.css';
import Header from './Components/header/Header';
import Body from './Components/body/Body';
import Text from './Components/text/Text';
import Login from "./Components/Login/Login";

function App() {
  const username="Burhan Ali Shaikh"
  return (
    <div className="App">
    
      <Header name={username}></Header>
      <Body msgname={username}></Body>
      <Text></Text>
    </div>
  );
}

export default App;
