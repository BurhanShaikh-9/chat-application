import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import textcss from "./Text.module.css"


function Text({getMsg}) {
  
  const inputRef = useRef(null);
  
  const navigateToHome = () => {
    getMsg(inputRef.current.value);
    
  };
  return (
    
    <nav className={`navbar ${textcss.footernav}`}>
      <div className="container">
        <form className={textcss.flexs} role="search">
          <button className={`btn ${textcss.txtbtn}`} id={textcss.btun1} type="submit">Esc</button>
          <input className={`form-control ${textcss.typebar}`}  type="search" autoComplete="off" placeholder="Write Message..." aria-label="Search" ref={inputRef}/>
          <button className={`btn ${textcss.txtbtn}`} id={textcss.btun2} type="submit">+</button>
          <button className={`btn ${textcss.txtbtn}`} id={textcss.btun3} type="submit" onClick={navigateToHome}>Send</button>
        </form>
      </div>
    </nav>
    

  );
  
}

export default Text;
