// Can you explain what is being imported here?
import { getPosts, getUsers, usePostCollection } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/footer.js";
import { PostEntry } from "./postEntry.js";

const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".postList");
  getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  });
};

const startGiffyGram = () => {
  showPostList();
};

startGiffyGram();

const showNavBar = () => {
  //Get a reference to the location on the DOM where the list will display
  const navElement = document.querySelector("nav");
  navElement.innerHTML = NavBar();
};
showNavBar();

const showFooter = () => {
  //Get a reference to the location on the DOM where the nav will display
  const navElement = document.querySelector("footer");
  navElement.innerHTML = Footer();
};

showFooter();

const showpostEntry = () => {
  //Get a reference to the location on the DOM where the nav will display
  const bodyElement = document.querySelector(".entryForm");
  bodyElement.innerHTML = PostEntry();
};

showpostEntry();

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
  console.log("what was clicked", event.target);

  if (event.target.id === "logout") {
    console.log("You clicked on logout");
  }
});
applicationElement.addEventListener("click", (editbutton) => {
  if (editbutton.target.id.startsWith("edit")) {
    console.log("post clicked", editbutton.target.id.split("--"));
    console.log("the id is", editbutton.target.id.split("--")[1]);
  }
});
applicationElement.addEventListener("click", event => {
  if (event.target.id === "newPost__cancel") {
      //clear the input fields
  }
});


const showFilteredPosts = (year) => {
  //get a copy of the post collection
  const epoch = Date.parse(`01/01/${year}`);
  //filter the data
  const filteredData = usePostCollection().filter((singlePost) => {
    console.log("single post", singlePost);
    if (singlePost.date >= epoch) {
      return singlePost;
    }
  });
  const postElement = document.querySelector(".postList");
  postElement.innerHTML = PostList(filteredData);
};

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value);
    console.log(`User wants to see posts since ${yearAsNumber}`);
    //invoke a filter function passing the year as an argument
    showFilteredPosts(yearAsNumber);
  }
});
