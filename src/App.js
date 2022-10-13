import './App.css';
import Header from './Components/header/Header';
import Login from "./Components/Login/Login";
import Home from "./Home"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [username,setUsername] = useState('');
  const getName = (hi) => {
    setUsername(hi);
  }



  return (
    
    <div className="App">
      <BrowserRouter>
      <Header name={username}></Header>
        <Routes>
          <Route path="/home" element={<Home msgname={username}/>} />
          <Route path="/" element={<Login getName={getName}/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
