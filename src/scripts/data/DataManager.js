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