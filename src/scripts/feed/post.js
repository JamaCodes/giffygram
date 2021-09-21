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
        <button id="delete__${PostsObject.id}">Delete</button>
        <button id="edit__${PostsObject.id}">Edit</button>
        </section>
    `
  }
