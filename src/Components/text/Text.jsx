import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Text.css"

function Text({getMsg}) {
  
  const inputRef = useRef(null);
  const navigateToHome = () => {
    getMsg(inputRef.current.value);
 
  };
  return (
    <section className='footer'>
      <div className='container'>
        <div className='footerdiv'>
          <form className="row g-3">
            <div className="col-xl-1 col-sm-1">
            <button type="submit" className="btn btn-primary mb-3" id='btun1'>ESC</button>
            </div>
            <div className="col-xl-9 col-sm-9">
              <input type="text" className="form-control" id="msgId" placeholder="Write Message" ref={inputRef}/>
            </div>
            <div className="col-xl-1 col-sm-1">
              <button type="submit" className="btn btn-primary mb-3" id='btun2'>+</button>
            </div>
            <div className="col-xl-1 col-sm-1">
              <button type="submit" className="btn btn-primary mb-3" onClick={navigateToHome} id='btun3'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Text;