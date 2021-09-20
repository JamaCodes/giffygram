// export const getJokes = () => {

//     return fetch("https://icanhazdadjoke.com/", {
//         headers: {
//             Accept: "application/json",
//     }})

//     .then(response => response.json())
//     .then(parsedResponse => {
//         // do something with response here
//         return parsedResponse;
//     })

// }

export const getUsers = () => {

    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}
let postCollection = [];
export const getPosts = () => {

    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        postCollection = parsedResponse
        return parsedResponse;
    })
}

export const deletePost = postId => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getPosts)
  }
  
  export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8088/Posts/${postId}`)
      .then(response => response.json())
  }

  export const updatePost = postObj => {
    return fetch(`http://localhost:8088/Posts/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
        
  }


const loggedInUser = {
	id: 7,
	name: "human seven",
	email: "humanseven@bn.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}


export const usePostCollection = () => {
    return postCollection;
}

export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
  }
  