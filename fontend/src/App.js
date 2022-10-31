import './App.css';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Body from "./Components/Body/Body";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  /*get username*/
  const [username, setUsername] = useState('');
  const getName = (name) => {
    setUsername(name);
  }
  /*get text message */
  const [textmessage, setTextmessage] = useState('');
  const gettingText = (msgs) => {
    setTextmessage(msgs);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={username}></Header>
        <Routes>
          <Route path="/home" element={<Body msgname={username} getMessage={gettingText} msgText={textmessage}/>}  />
          <Route path="/" element={<Login getNames={getName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
