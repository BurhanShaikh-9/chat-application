import BodyMsg from './Components/bodymessage/Bodymessage';
import Text from './Components/text/Text';
import {useState} from 'react'

function Home(props) {
    const [textmessage, setTextmessage] = useState('');

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