 export const Posts = (PostsObject) => {

   const dateObj = new Date(PostsObject.date);
   const formattedDate = dateObj.toDateString();

    return `
      <section class="post">
        <header>
            <h2 class="post__title">${PostsObject.title}</h2>
        </header>
        <img class="post__image" src="${PostsObject.imageURL}" />
        <p>${formattedDate}</p>
        <div><button id="edit--${PostsObject.id}">Edit</button></div>
      </section>
    `
  }
