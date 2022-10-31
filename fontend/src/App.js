import './App.css';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Body from "./Components/Body/Body";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
const io = require("socket.io-client");
const socket = io.connect("http://localhost:3001");


function App() {
  /*get username*/
  const [username, setUsername] = useState('');
  const getName = (name) => {
    setUsername(name);
  }

  const [room, setRoom]= useState('');
  const getRoom = (room) => {
    setRoom(room)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={username}></Header>
        <Routes>
          <Route path="/home" socket={socket} element={<Body username={username} socket={socket} room={room}/>}  />
          <Route path="/" element={<Login getNames={getName} getRooms={getRoom} socket={socket}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
