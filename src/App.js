import './App.css';
import Header from './Components/header/Header';
import Login,{navigateToHome} from "./Components/Login/Login";
import Home from "./Home"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

const username = Login.navigateToHome;
  return (
  
    <div className="App">
      <Header name={username}></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
