import Message from "../message/Message"
import "./Body.css"

function BodyMsg(props) {


  return (
    <section className='bodymsg'>
      <div className='container'>
        <div className='bodyouterdiv'>
            <div className='bodyinnerdiv'>
                
                <Message messagename={props.msgname}/>
                <Message messagename={props.msgname} own={true}/>
       
            </div>
        </div>
      </div>
    </section>
  );
}

export default BodyMsg;