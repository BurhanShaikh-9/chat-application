import axios from 'axios';
import React from "react";

/*function getTodos() {

  
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => { 
        console.log(res.data[0].title); 
      
    })
      .catch(err => console.error(err));
  }
  export default getTodos;*/



  /*
  const baseURL = "https://jsonplaceholder.typicode.com/todos";
  
  export default function App() {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
      axios
        .get(baseURL)
        .then((res) => {
          setPost(res.data);
        })
        .catch(err => console.error(err));
    }, []);
    
  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
      })
      .then((res) => {
        console.log(res.data);
      });
  }
    return (
      <div>
        <h1>{post}</h1>
        <button onClick={createPost}>Create Post</button>
      </div>
    );
  }*/


  /*
 const baseURL = "https://jsonplaceholder.typicode.com/todos/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(baseURL, {
        title: "Hello World!",
    
      })
      .then((res) => {
        setPost(res.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}
*/
const baseURL = "https://my-json-server.typicode.com/nyx-95/chat-application/db";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
    .get(baseURL)
    .then((res) => {setPost(res.data);
      console.log(res.data)});
  }, []);

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
     
    </div>
  );
}