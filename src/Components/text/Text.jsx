import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Text.css"

function Text({getMsg}) {
  
  const inputRef = useRef(null);
  const navigateToHome = () => {
    getMsg(inputRef.current.value);
 
  };
  return (

    <nav className="navbar footernav">
      <div className="container">
        <form className="d-flex" role="search">
          <button className="btn txtbtn" id="btun1" type="submit">Esc</button>
          <input className="form-control typebar" type="search" autoComplete="off" placeholder="Write Message..." aria-label="Search" ref={inputRef}/>
          <button className="btn txtbtn" id="btun2"type="submit">+</button>
          <button className="btn txtbtn" id="btun3" type="submit" onClick={navigateToHome}>Send</button>
        </form>
      </div>
    </nav>

  );
}

export default Text;