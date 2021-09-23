//this needs to be located above the Post declaration
//this could also be imported to this module
import { getLikes } from "./../data/DataManager.js";

const getNumberOfLikes = (PostId) => {
  getLikes(PostId)
  .then(response => {
    document.querySelector(`#likes__${PostId}`).innerHTML = `👍 ${response.length}`;
  });

}
 export const Posts = (PostsObject) => {

   const dateObj = new Date(PostsObject.timestamp);
   const formattedDate = dateObj.toDateString();
   
  
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${PostsObject.title}</h2>
            <h2 class="post__title">${PostsObject.user.name}</h2>
        </header>
        <img class="post__image" src="${PostsObject.imageURL}" />
        <p>${formattedDate}</p>
        <p id="likes__${PostsObject.id}">👍 ${getNumberOfLikes(PostsObject.id)}</p>
        <button id="delete__${PostsObject.id}">Delete</button>
        <button id="edit__${PostsObject.id}">Edit</button>
        <button id="like__${PostsObject.id}">Like</button>
       
        
       
       
        </section>
    `
  }
