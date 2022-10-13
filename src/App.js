import './App.css';
import Header from './Components/header/Header';
import Login,{nameVal} from "./Components/Login/Login";
import Home from "./Home"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
const username = nameVal;
  return (
  
    <div className="App">
      <Header name={nameVal}></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home msgname={username}/>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
