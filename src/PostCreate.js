// import React, { useState } from "react";
// import addNewPost from "./app";
// /**
//  * Displays the form to create a new post, which can be either an image or a text post.
//  *
//  * When the form is submitted, a new post is created and the form contents cleared.
//  */
// function PostCreate() {

//   const [type, setType] = useState("Text");

//   const [formData, setFormData] = useState({  });

//   const handleChange = ({ target }) => {//in the downdown chnaged target =onChange={handleChange}
//     if ( target.id === "type") {
//     setType(target.value)
//     }
//     setFormData({
//       ...formData,
      
//       [target.name]: target.value//formData.left=right side
//     });
//   };

//   const handleChangeImage = ({ target }) => {
//     const value = target.type === "Text" ? target.checked : target.value;
//     setFormData({
//       ...formData,
//       [target.name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted:", formData);
//     setFormData({ ...initialFormState });
//   };

//   // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

//   // For the tests to pass, the form below must have:
//   // - a `name="create"` attribute
//   // - one child `<button>` with a `type="submit"` attribute
//   // - one child `<select>` with a `name="type"` attribute
//   // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

//   return (
//     <form onSubmit={handleSubmit} name="create">
//       <fieldset>
//         <legend>Create</legend>
//         <div>
//           <label htmlFor="type">Type: </label>
//           <select id="type" name="type" onChange={handleChange} required={true} value ={formData.type}>
//             <option>Text</option>
//             <option>Image</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="content">Content: </label>
//           {type === "Text" ? (
//             <textarea
//               onChange={handleChange}
//               placeholder="Type in this box."
//               id="content"
//               name="content"
//               required={true}
//               rows={3}
//               value={formData.content}///user input 
//             />
//           ) : (
//             <input 
//             id="content" 
//             name="content" 
//             type="url" 
//             required={true} />
//           )}
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </fieldset>
//     </form>
//   );
// }

// export default PostCreate;
import React, { useState } from "react";
/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.
function PostCreate({type, handleTypeChange, handleSubmit, content, handleContentChange}) {
  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" onChange={handleTypeChange} required={true} value={type}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea id="content" name="content" required={true} onChange={handleContentChange} value={content} rows={3} />
          ) : (
            <input id="content" name="content" type="url" required={true} value={content} onChange={handleContentChange} />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}
export default PostCreate;