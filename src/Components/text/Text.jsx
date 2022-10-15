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
          <form class="row g-3">
            <div class="col-xl-1 col-sm-1">
            <button type="submit" class="btn btn-primary mb-3">ESC</button>
            </div>
            <div class="col-xl-9 col-sm-9">

              <input type="text" class="form-control" id="msgId" placeholder="Write Message" ref={inputRef}/>
            </div>
            <div class="col-xl-1 col-sm-1">
              <button type="submit" class="btn btn-primary mb-3">+</button>
            </div>
            <div class="col-xl-1 col-sm-1">
              <button type="submit" class="btn btn-primary mb-3" onClick={navigateToHome}>Send</button>
            </div>
          </form>

        </div>
      </div>
    </section>

  );
}

export default Text;