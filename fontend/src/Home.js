import BodyMsg from './Components/bodymessage/Bodymessage';
import Text from './Components/text/Text';
import {useState} from 'react'
import io from "socket.io-client"
const socket = io.connect("http://localhost:3000")


function Home(props) {
  const [chat, setChat] =  useState([]);

    const [textmessage, setTextmessage] = useState('');
    socket.emit("chat", {textmessage});
    const gettingText = (name) => {
      setTextmessage(name);
    }

  return (
    <div className="Home">
      <BodyMsg msgname={props.msgname} msgtext={textmessage}></BodyMsg>
      <Text getMessage={gettingText}></Text>
    </div>
    
  );
}

export default Home;