//

//array that contain the id of the posts
const postArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//We create a function that will display the posts. Each post is stored in a html file in the folder posts. The content will be displayed in the div with the class "article"; in the "article-container" div
function displayPosts() {
    console.log("displayPosts");
    //we need to empty the div before displaying the posts
    document.getElementById("article-container").innerHTML = "";
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
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
    //we need to reverse the array, and then call the function that will display the posts
    postArray.reverse();
    displayPosts();
    //we need to change the text of the button
    if(document.getElementById("chrono").innerHTML === "Oldest First") {
        document.getElementById("chrono").innerHTML = "Newest First";
    }
    else {
        document.getElementById("chrono").innerHTML = "Oldest First";
    }
}

//display the posts when the page is loaded

displayPosts();