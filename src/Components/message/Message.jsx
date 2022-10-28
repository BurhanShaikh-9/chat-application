import "./Message.css"


  function Message(props) {
   
    var msg = <p>{props.messagetext}</p>
    return (
      <div className={props.own ? "message own" : "message"}>
        <div className='container'>
              <div className='msg-outerdiv'>
                  { props.messagename === '' ? 'Stranger' : props.messagename}
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