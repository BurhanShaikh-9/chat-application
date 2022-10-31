import './App.css';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Body from "./Components/Body/Body";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");


function App() {
  /*get username*/
  const [username, setUsername] = useState('');
  const getName = (name) => {
    setUsername(name);
  }


  
  /*get text message */
  const [message, setMessage] = useState("");
  const gettingText = (msgs) => {
    setMessage(msgs);
  }

  socket.emit("send_message", {message});

  const [messageReceived, setMessageReceived] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={username}></Header>
        <Routes>
          <Route path="/home" element={<Body msgname={username} getMessage={gettingText} msgText={message} msgrecieved={messageReceived}/>}  />
          <Route path="/" element={<Login getNames={getName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
