import BodyMsg from './Components/bodymessage/Bodymessage';
import Text from './Components/text/Text';
import {useState} from 'react'



function Home(props) {
  
  const [textmessage, setTextmessage] = useState('');
  const gettingText = (name) => {
    setTextmessage(name);
  }
  const chatarray = [textmessage];
  
  return (
    <div className="Home">
      <BodyMsg msgname={props.msgname} msgtext={chatarray}></BodyMsg>
      <Text getMessage={gettingText}></Text>
    </div>
    
  );
}

export default Home;