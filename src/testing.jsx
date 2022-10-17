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
            setPost(res.data[0].title);
            console.log(post);
        })
        .catch(err => console.error(err));
    }, []);
  
    return (
      <div>
        <h1>{post}</h1>

      </div>
    );
  }*/

 const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}