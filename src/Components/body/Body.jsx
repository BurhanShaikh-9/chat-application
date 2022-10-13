import Message from "../message/Message"
import "./Body.css"

function Body(props) {
  return (
    <section className='body'>
      <div className='container'>
        <div className='bodyouterdiv'>
            <div className='bodyinnerdiv'>
                <Message messagename={props.msgname}/>
                <Message messagename={props.msgname} own={true}/>
                <Message messagename={props.msgname}/>
                <Message messagename={props.msgname}/>
                <Message messagename={props.msgname}/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Body;