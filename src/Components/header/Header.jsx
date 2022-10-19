import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import {useNavigate} from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/');

  };
 
  return (
    <div>
      <nav className='navbar topnav'>
        <div className='container'>
            <button className='navbar-brand' onClick={navigateToLogin}>Chatting app</button>
            <span className='navbar-brand name'>{ props.name === '' ? 'Stranger' : props.name}</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;