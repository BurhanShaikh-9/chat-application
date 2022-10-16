import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Text.css"

function Text({getMsg}) {
  
  const inputRef = useRef(null);
  const navigateToHome = () => {
    getMsg(inputRef.current.value);
 
  };
  return (

    <nav class="navbar footernav">
      <div class="container">
        <form class="d-flex" role="search">
          <button class="btn txtbtn" id="btun1" type="submit">Esc</button>
          <input class="form-control typebar" type="search" placeholder="Write Message..." aria-label="Search" ref={inputRef}/>
          <button class="btn txtbtn" id="btun2"type="submit">+</button>
          <button class="btn txtbtn" id="btun3" type="submit" onClick={navigateToHome}>Send</button>
        </form>
      </div>
    </nav>

  );
}

export default Text;