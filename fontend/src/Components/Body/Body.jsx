import bodycss from "./body.module.css";
import "./Message.css"
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function BodyMsg(props) {
  const [chat, setChat] = useState([]);
  /* setChat.map((props.msgrecieved,index)=>{
    return(
      <p key={index}>{chat}</p>
      )
    })*/
    //setChat(props.msgrecieved)
    /*chat.map((hi,index)=>{
      return(
        <p key={index}>{hi}</p>
        )
      })*/
    // var msg = <p>{props.msgText}</p>
    //var rmsg = <p>{props.msgrecieved}</p>

    const inputRef = useRef(null);

    const esc = (event) => {
      event.preventDefault();
    };

    const addMedia = (event) => {
      event.preventDefault();
    };

    const sendMessage = (event) => {
      
      if(event.keycode === '13'){
        event.preventDefault();
        props.getMessage(inputRef.current.value);
        inputRef.current.value = "";
      }else{
      
      event.preventDefault();
      props.getMessage(inputRef.current.value);
      inputRef.current.value = "";
    }
    };

  return (
    <section className={bodycss.bodymsg}>
      <div className="container">
        <div className={bodycss.bodyouterdiv}>
          <div className={bodycss.bodyinnerdiv}>  


          {props.msgrecieved.map((i, index) => {
                    return(
                      <div className="message" key={index}>
                      <div className="container" key={index}>
                        <div className="msg-outerdiv" key={index}>
                          {props.msgname === "" ? "Stranger" : props.msgname}
                          <br />
                          <div className="messageText" key={index}>
                              <p key={index}>{i}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })}
           
            {props.msgText.map((j, index) => {
                    return(
                      <div className="message own" key={index}>
                      <div className="container" key={index}>
                        <div className="msg-outerdiv" key={index}>
                          {props.msgname === "" ? "Stranger" : props.msgname}
                          <br />
                          <div className="messageText" key={index}> 
                              <p key={index}>{j}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })}
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
