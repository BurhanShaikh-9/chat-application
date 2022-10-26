import {useRef} from 'react';

import textcss from "./Text.module.css"


function Text({}) {
  const inputRef = useRef(null);
  const esc = (event) => {
    event.preventDefault();
  };
  const addMedia = (event) => {
    event.preventDefault();
  };
  const sendMessage = (event) => {
    event.preventDefault();
  };
  return (
    
    <nav className={`navbar ${textcss.footernav}`}>
      <div className="container">
        <form className={textcss.flexs} role="search">
          <button className={`btn ${textcss.txtbtn}`} id={textcss.btun1} type="submit" onClick={esc}>Esc</button>
          <input className={`form-control ${textcss.typebar}`}  type="search" autoComplete="off" placeholder="Write Message..." aria-label="Search" ref={inputRef}/>
          <button className={`btn ${textcss.txtbtn}`} id={textcss.btun2} type="submit" onClick={addMedia}>+</button>
          <button className={`btn ${textcss.txtbtn}`} id={textcss.btun3} type="submit" onClick={sendMessage}>Send</button>
        </form>
      </div>
    </nav>
    

  );
  
}

export default Text;
