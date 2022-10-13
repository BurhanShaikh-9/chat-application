import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";


function header(props) {
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
            
            <p className='navbar-brand' href="#">Chatting app</p>
            <span className='navbar-brand name'>{props.name}</span>
        
        </div>
      </nav>
    </div>
  );
}

export default header;