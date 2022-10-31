import bodycss from "./body.module.css";
import "./Message.css"
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


function BodyMsg({socket, username, room}) {

  const navigate = useNavigate();

    // var msg = <p>{props.msgText}</p>
    //var rmsg = <p>{props.msgrecieved}</p>

    const esc = (event) => {
      event.preventDefault();
      navigate('/');
    };

    const addMedia = (event) => {
      event.preventDefault();
    };



    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
  
    const sendMessage = async (event) => {
      event.preventDefault();
      if (currentMessage !== "") {
        const messageData = {
          room: room,
          author: username,
          message: currentMessage,
        };
  
        await socket.emit("send_message", messageData);
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage(" ");
      }
    };
  
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);

  return (
    <section className={bodycss.bodymsg}>
      <div className="container">
        <div className={bodycss.bodyouterdiv}>
          <div className={bodycss.bodyinnerdiv}>  

          {messageList.map((messageContent, index) => {
            return (
                      <div className={username === messageContent.author ? "message own" : "message"} key={index}>
                      <div className="container" >
                        <div className="msg-outerdiv" >
                          {username === "" ? "Stranger" : "Stranger"}
                          <br />
                          <div className="messageText">
                            <p>{messageContent.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
              );
            })}
            
        </div>
      </div>
      </div>
      <nav className={`navbar ${bodycss.footernav}`}>
      <div className="container">
        <form className={bodycss.flexs} role="search">
          <button className={`btn ${bodycss.txtbtn}`} id={bodycss.btun1} type="submit" onClick={esc}>Esc</button>
          <input className={`form-control ${bodycss.typebar}`}  
          type="text" 
          autoComplete="off" 
          placeholder="Write Message..." 
          onChange={(event) => {setCurrentMessage(event.target.value);}}
          onKeyPress={(event) => {event.key === "Enter" && sendMessage();}}
          />
          <button className={`btn ${bodycss.txtbtn}`} id={bodycss.btun2} type="submit" onClick={addMedia}>+</button>
          <button className={`btn ${bodycss.txtbtn}`} id={bodycss.btun3} type="submit" onClick={sendMessage}>Send</button>
        </form>
      </div>
    </nav>

    </section>
  );
}

export default BodyMsg;
