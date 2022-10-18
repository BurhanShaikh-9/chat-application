import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const baseURL = "https://my-json-server.typicode.com/nyx-95/chat-application/Users";

function Login({ getNames }) {

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
    .get(baseURL)
    .then((res) => {
      setPost(res.data[0].name);
      console.log ("printing in get", res.data[0].name)
      });
  }, []);


  const navigateToHome = () => {
    navigate('/home');
    getNames(inputRef.current.value)

      axios
      .post(baseURL,{name: inputRef.current.value},console.log("prininting in post", inputRef.current.value))
      .then((res) => {
        console.log("before setpost in post",res.data)
        setPost(res.data.name)
        console.log("after setpost in post",res.data.name)
        // NOT GETTING DATA IN POST
        console.log("before post in post",post)
        getNames(post);
        console.log("after post in post",post)
      })

  }



  return (
    <div className='loginbody'>
      <div className='container'>
        <div className='loginOuterdiv'>
          <div className='loginInnerdiv'>
            <div className="group">
              <input type="text" required id="loginName" ref={inputRef} autoComplete="off" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>
            <div className='row loginButton'>
              <button type="button" className="btn btn-primary" id='loginbtn' onClick={navigateToHome}>Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
