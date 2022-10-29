import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import React from 'react';
import logincss from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const baseURL = "https://my-json-server.typicode.com/nyx-95/chat-application/Users";

function Login({ getNames }) {

  const inputRef = useRef(null);
  const navigate = useNavigate();



  const navigateToHome = () => {
    navigate('/home');
    getNames(inputRef.current.value)
      axios
      .post(baseURL,{name: inputRef.current.value})
      .then((res) => {
        getNames(res.data.name)
      })
  }

  return (
    <div className={logincss.loginbody}>
      <div className='container'>
        <div className={logincss.loginOuterdiv}>
          <div className={logincss.loginInnerdiv}>
            <div className={logincss.group}>
              <input type="text" required id="loginName" ref={inputRef} autoComplete="off" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>
            <div className={`row ${logincss.loginButton}`}>
              <button type="button" className="btn btn-primary" id={logincss.loginbtn} onClick={navigateToHome}>Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
