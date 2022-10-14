import "./Message.css"



var msg = <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aspernatur dolores adipisci qui voluptate nobis accusantium laboriosam quas aliquam consectetur, obcaecati non earum ea quis cumque. Tenetur laborum consequatur minus.</p>
function Message(props) {

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