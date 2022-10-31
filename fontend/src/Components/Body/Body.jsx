import bodycss from "./body.module.css";
import "./Message.css"
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function BodyMsg(props) {

  const [chat, setChat] = useState('');

    var msg = <p>{props.msgText}</p>
    var rmsg = <p>{props.msgrecieved}</p>

    const inputRef = useRef(null);

    const esc = (event) => {
      event.preventDefault();
    };

    const addMedia = (event) => {
      event.preventDefault();
    };

    const sendMessage = (event) => {
      event.preventDefault();
      props.getMessage(inputRef.current.value);
      inputRef.current.value = "";
    };

  return (
    <section className={bodycss.bodymsg}>
      <div className="container">
        <div className={bodycss.bodyouterdiv}>
          <div className={bodycss.bodyinnerdiv}>  

            <div className="message">
              <div className="container">
                <div className="msg-outerdiv">
                  {props.msgname === "" ? "Stranger" : props.msgname}
                  <br />
                  <div className="messageText">
                    {rmsg}
                  </div>
                </div>
              </div>
            </div>

            <div className="message own">
              <div className="container">
                <div className="msg-outerdiv">
                  {props.msgname === "" ? "Stranger" : props.msgname}
                  <br />
                  <div className="messageText"> {msg}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <nav className={`navbar ${bodycss.footernav}`}>
      <div className="container">
        <form className={bodycss.flexs} role="search">
          <button className={`btn ${bodycss.txtbtn}`} id={bodycss.btun1} type="submit" onClick={esc}>Esc</button>
          <input className={`form-control ${bodycss.typebar}`}  type="text" autoComplete="off" placeholder="Write Message..." ref={inputRef}/>
          <button className={`btn ${bodycss.txtbtn}`} id={bodycss.btun2} type="submit" onClick={addMedia}>+</button>
          <button className={`btn ${bodycss.txtbtn}`} id={bodycss.btun3} type="submit" onClick={sendMessage}>Send</button>
        </form>
      </div>
    </nav>

    </section>
  );
}

export default BodyMsg;
