import './App.css';
import Header from "./Components/header/Header";
import Text from "./Components/text/Text";
import Body from "./Components/body/Body";
import {Login} from "./Components/Login/Login";

function App() {
    const username="Burhan Ali Shaikh"
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
