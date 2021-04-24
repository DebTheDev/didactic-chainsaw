// import React from "react";
// import PostCreate from "./PostCreate"
// /**
//  * Diplays a list of either text or image posts.
//  *
//  */
// function PostList() {
//   // TODO: Diplay the list of posts.
  
//   // TODO: Create at least one additional component that is used by this component.
//   // TODO: Each post must have className="post" for the tests to work.
//   // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

//   return  <div className="post-list"></div>;
// }

// export default PostList;



import React from "react";
import ContentHandler from "./ContentHandler"
function PostList({posts, handleDelete}) {
  console.log(posts);
  const allPosts = posts.map((post, index) => (
    <li key={index} id={index} className="post">
      {console.log(posts)}
      <ContentHandler type={(post.kind)} content={(post.mess)} />
      <button name="delete" onClick={handleDelete}>Delete</button>
    </li>
    ));
  return (!posts.length) ? null : (
    <div className="post-list">
      <ul>{allPosts}</ul>
    </div>
  )
}
export default PostList;