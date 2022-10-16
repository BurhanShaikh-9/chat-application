import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';


function Login({ getName }) {

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
    <div className='loginbody'>
      <div className='container'>
        <div className='loginOuterdiv'>
          <div className='loginInnerdiv'>
            <div class="group">
              <input type="text" required id="loginName" ref={inputRef}/>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
            </div>
            <div className='row loginButton'>
              <button type="button" class="btn btn-primary" id='loginbtn' onClick={navigateToHome}>Login</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
