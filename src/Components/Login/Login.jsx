import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import "./Login.css";
import {useNavigate} from 'react-router-dom';
export var nameVal;
function Login() {


 /* function pageRedirect() {
    window.location.replace(<Home />);
  }
  const navigateToLogin = () => {
    // 👇️ navigate to /
    navigate('/');
    function getInputValue(){
   var inputVal = document.getElementById("loginInput").value;     
  }
  };*/
  /*const [name, setName] = useState('');
  const handleChange = event => {
    setName(event.target.value);
    console.log('value is:', event.target.value);
  };*/

  const inputRef = useRef(null);
  
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');
    nameVal = inputRef.current.value;
    console.log('Printing in Login', nameVal)
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
