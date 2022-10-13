import BodyMsg from './Components/bodymessage/Bodymessage';
import Text from './Components/text/Text';

function Home(props) {
  return (
    <div className="Home">
      <BodyMsg msgname={props.msgname}></BodyMsg>
      <Text></Text>
    </div>
    
  );
}

export default Home;