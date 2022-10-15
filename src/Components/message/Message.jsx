import "./Message.css"
import Text from "../text/Text"
import { useState } from "react";

  function Message(props) {
    const [message, setMsg] = useState('');
    const getMsg = (hi) => {
      setMsg(hi);
      <Text getMsg={getMsg}></Text>
    }
    var msg = <p>{message}</p>
    return (
      <div className={props.own ? "message own" : "message"}>
        <div className='container'>
              <div className='msg-outerdiv'>
                  {props.messagename}
                  <br/>
                  <div className="messageText">
                    {msg}
                  </div>
              </div>
        </div>
      </div>
    );
  }
  
  export default Message;