import Message from "../message/Message"
import bodycss from "./Body.module.css"

function BodyMsg(props) {


  return (
    <section className={bodycss.bodymsg}>
      <div className='container'>
        <div className={bodycss.bodyouterdiv}>
            <div className={bodycss.bodyinnerdiv}>
                <Message messagename={props.msgname} own={true}/>
                <Message messagename={props.msgname}/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default BodyMsg;