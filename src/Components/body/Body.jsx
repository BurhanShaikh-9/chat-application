import Message from "../message/Message"
import "./Body.css"

function Body(props) {
  return (
    <section className='body'>
      <div className='container'>
        <div className='outerdiv'>
            <div className='innerdiv'>
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