
import Header from './Components/header/Header';
import BodyMsg from './Components/bodymessage/Bodymessage';
import Text from './Components/text/Text';



function Home() {
  const username="Burhan Ali Shaikh"
  return (
    <div className="Home">
      <Header name={username}></Header>
      <BodyMsg msgname={username}></BodyMsg>
      <Text></Text>
    </div>
    
  );
}

export default Home;