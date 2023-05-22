//

//array that contain the id of the posts
const postArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//array that contain information about the posts, each post is an object, and each object as an id and a language
const postInfos = [
    {
        id: 1,
        language: "Js",
        visible: true
    },
    {
        id: 2,
        language: "Js",
        visible: true
    },
    {
        id: 3,
        language: "Js",
        visible: true

    },
    {
        id: 4,
        language: "Js",
        visible: true
    },
    {
        id: 5,
        language: "Js", 
        visible: true
    },
    {
        id: 6,
        language: "Ts",
        visible: true
    },
    {
        id: 7,
        language: "Js",
        visible: true
    },
    {
        id: 8,
        language: "Js",
        visible: true
    },
    {
        id: 9,
        language: "Python",
        visible: true
    },
    {
        id: 10,
        language: "Python",
        visible: true
    },
    {
        id: 11,
        language: "Python",
        visible: true
    },
    {
        id: 12,
        language: "Js",
        visible: true
    },
    {
        id: 13,
        language: "Js",
        visible: true
    },
    {
        id: 14,
        language: "Cpp",
        visible: true
    }

];

let currentFilter = "all";

//We create a function that will display the posts. Each post is stored in a html file in the folder posts. The content will be displayed in the div with the class "article"; in the "article-container" div
function displayPosts() {
    console.log("displayPosts");
    //we need to empty the div before displaying the posts
    document.getElementById("article-container").innerHTML = "";
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
        //we need to check if the post is visible
        if (postInfos[postArray[i] - 1].visible === false) {
            console.log("post number " + postArray[i] + " is not visible");
            continue;
        }
        //we create a new div
        console.log("create new div for post number " + postArray[i]);
        const newDiv = document.createElement("div");
        //we add the class "article" to the div
        newDiv.classList.add("article");
        //we get the content of the html file by using fetch (really useful to get the content of a file)
        fetch("posts/" + postArray[i] + ".html")
            .then((response) => response.text())
            .then((data) => {
                //we add the content to the div
                newDiv.innerHTML = data;
        });
        //we add the div to the div with the class "article-container"
        document.getElementById("article-container").appendChild(newDiv);
    }
}

function chronoOrder () {
    //we need to reverse the array
    postArray.reverse();
    //we need to change the text of the button
    if(document.getElementById("chrono").innerHTML === "Oldest First") {
        document.getElementById("chrono").innerHTML = "Newest First";
    }
    else {
        document.getElementById("chrono").innerHTML = "Oldest First";
    }
    //we refresh the posts, using the new array
    displayPosts();
}

function resetFilters() {
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
        //we mark the post as visible
        postInfos[postArray[i] - 1].visible = true;
    }
    //we refresh the posts
    displayPosts();
}

//change filters
//------------------

function filterJs() {
    //we change the current filter
    currentFilter = "Js";
    //we call the function that filter the posts
    filterPosts();
}

function filterTs() {
    //we change the current filter
    currentFilter = "Ts";
    //we call the function that filter the posts
    filterPosts();
}

function filterPython() {
    //we change the current filter
    currentFilter = "Python";
    //we call the function that filter the posts
    filterPosts();
}

function filterCpp() {
    //we change the current filter
    currentFilter = "Cpp";
    //we call the function that filter the posts
    filterPosts();
}
//------------------

function filterPosts() {
    //we loop through the array, and check if the value of language is the same as the current filter
    for (let i = 0; i < postArray.length; i++) {
        if (postInfos[postArray[i] - 1].language === currentFilter) {
            //if it is, we mark the post as visible
            postInfos[postArray[i] - 1].visible = true
        }
        else {
            //if it is not, we mark the post as not visible
            postInfos[postArray[i] - 1].visible = false;
        }
    }
    //we refresh the posts
    displayPosts();
    console.log("Post were filtered by " + currentFilter);
}

//display the posts when the page is loaded
displayPosts();