import 'bootstrap/dist/css/bootstrap.css';
import { useRef, useState } from 'react';
import React from 'react';
import logincss from "./login.module.css";
import { useNavigate } from 'react-router-dom';


function Login(props) {

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState("");

  
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      props.getNames(username)
      props.getRooms(room)
      props.socket.emit("join_room", room);
      navigate('/home');
    }
  };
  

  return (
    <div className={logincss.loginbody}>
      <div className='container'>
        <div className={logincss.loginOuterdiv}>
          <div className={logincss.loginInnerdiv}>
            <div className={logincss.group}>
              <input type="text" required id="loginName" ref={inputRef} autoComplete="off" onChange={(event) => {setUsername(event.target.value);}}/>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>
            <div className={logincss.group}>
              <input type="text" required id="roomName" ref={inputRef} autoComplete="off" onChange={(event) => {setRoom(event.target.value);}}/>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>RoomName</label>
            </div>
            <div className={`row ${logincss.loginButton}`}>
              <button type="button" className="btn btn-primary" id={logincss.loginbtn} onClick={joinRoom}>Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
