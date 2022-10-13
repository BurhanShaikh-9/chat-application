import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";


function header(props) {
  return (
   <div>
  <nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="#">Chatting app</a>
      <span class="navbar-brand name">
        {props.name}
      </span>
  </div>
</nav>
    </div>
  );
}

export default header;