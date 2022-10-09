import './App.css';
import Header from "./Components/header/Header";
import Text from "./Components/text/Text";
import Body from "./Components/body/Body";


function Main() {
    const username="Burhan Ali Shaikh"
  return (
    <div className="App">
      <Header name={username}/>
      <Body msgname={username}/>
      <Text />
    </div>
  );
}

export default Main;