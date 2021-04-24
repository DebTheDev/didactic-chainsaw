// import React, { useState } from "react";
// import "./App.css";
// import PostCreate from "./PostCreate";
// import PostList from "./PostList";

// function App() {
//   const [posts, setPosts] = useState([]);

//   // TODO: Add the ability for the <PostCreate /> component to create new posts.
// const addNewPost = (post) => setPosts([...posts,post]) // keep everything in it add to end of area 
//   // TODO: Add the ability for the <PostList /> component to delete an existing post.

//   return (
//     <div className="App">
//       <PostCreate addNewPost={addNewPost} />
//       <PostList />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
function App() {
  /* Post List */
  const [posts, setPosts] = useState([]);
  const handleAddPost = (value) => {
    setPosts([...posts, value]);
  };
  const handleDelete = (event) => {
    const indexNumber = event.target.parentNode.id
    const newArray = [...posts];
    const removed = newArray.splice(indexNumber, 1);
    // console.log(removed);
    // console.log(newArray);
    setPosts(newArray);
    console.log(posts);
  };
  /* Post Create */
  const [type, setType] = useState("Text");
  const handleTypeChange = (e) => setType(e.target.value);
  const [content, setContent] = useState("");
  const handleContentChange = (event) => setContent(event.target.value);
  const handleSubmit = (e) => {
    handleAddPost({kind: type, mess: content});
    e.preventDefault();
    setContent("");
    setType("Text");
  };
  return (
    <div className="App">
      <PostCreate type={type} handleTypeChange={handleTypeChange} content={content} 
      handleContentChange={handleContentChange} handleSubmit={handleSubmit}/>
      <PostList handleAddPost={handleAddPost} posts={posts} handleDelete={handleDelete}/>
    </div>
  );
}
export default App;