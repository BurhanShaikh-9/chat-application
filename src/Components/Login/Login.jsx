import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import "./Login.css";
import {useNavigate} from 'react-router-dom';


function Login({getName}) {

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');
    getName(inputRef.current.value);
    /*if (getName(inputRef.current.value) === "" ){
        return getName(inputRef.current.value) ===getName("Strangers");
    }*/
  };

  return (
    <div className='container'>
      <div className='loginOuterdiv'>
        <div className='loginInnerdiv'>
          <div className='loginLabel'>
            <label>Enter Your Name</label>
          </div>
          <div className='loginInput'>
            <input placeholder='Enter Your Name' id="loginName" ref={inputRef}></input>
          </div>
          <div className='loginButton'>
            <button onClick={navigateToHome}>Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
