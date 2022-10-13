import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";


function header(props) {
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
         
            <a className='navbar-brand' href="#">Chatting app</a>
            <span className='navbar-brand name'>{props.name}</span>
        
        </div>
      </nav>
    </div>
  );
}

export default header;